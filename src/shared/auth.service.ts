import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Usuario } from './interfaces/usuario';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public ngFireAuth: AngularFireAuth, public router: Router, public ngfirestore: AngularFirestore) {
    this.ngFireAuth.authState.subscribe(user => {
      if (user) {
        localStorage.setItem("usuario", JSON.stringify(user));
        this.router.navigate(["local"]);
      }
      else {
        localStorage.setItem("usuario", null);
      }
    });
  }

  get emailUser(): string {
    const user = JSON.parse(localStorage.getItem("usuario"));
    return user.email;
  }

  get uidUser(): string {
    const user = JSON.parse(localStorage.getItem("usuario"));
    return user.uid;
  }

  SignIn(email, password) {
    return this.ngFireAuth.signInWithEmailAndPassword(email, password);
  }

  SignOut() {
    return this.ngFireAuth.signOut().then(() => {
      localStorage.removeItem("usuario");
    })
  }

  RegisterUser(email, password, usuario) {
    return this.ngFireAuth.createUserWithEmailAndPassword(email, password).then((result) => {

      this.createUser(result.user.uid, usuario);
    })
  }
  createUser(uid, usuario) {
    const userRef: AngularFirestoreDocument<any> = this.ngfirestore.doc('Usuario/' + uid);
    const userData: Usuario = {
      nome: usuario.nome,
      cpf: usuario.cpf,
      idade: usuario.idade
    }
    return userRef.set(userData, { merge: true });
  }

  resetPassword(email) {
    var auth = firebase.auth();
    return auth.sendPasswordResetEmail(email).then((res) => {

    })
      .catch((error) => {
        let msg = "";
        switch (error.code) {
          case "auth/invalid-email":
            msg = "O endereço de E-mail está em um formato incorreto.";
            break;
          case "auth/user-not-found":
            msg = "O Usuário não foi encontrado.";
            break;
          default:
            msg = "Erro ao Realizar a Redefinição de Senha";
        }
        window.alert(msg);
      })
  }

  getusuarioList() {
    const usuarioRef = this.ngfirestore.collection("Usuario");
    return usuarioRef;
  }

  setUsuario(usuario) {
    const userData: Usuario = {
      nome: usuario.nome,
      cpf: usuario.cpf,
      idade: usuario.idade
    }
    return this.ngfirestore.collection("Usuario").add(userData);
  }

  updateUser(uid, usuario) {
    const userData: Usuario = {
      nome: usuario.nome,
      cpf: usuario.cpf,
      idade: usuario.idade
    }
    const usuarioRef: AngularFirestoreDocument<any> = this.ngfirestore.doc("Usuario/" + uid);
    return usuarioRef.update(userData);
  }
}
