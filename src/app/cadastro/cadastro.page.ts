import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Usuario } from '../shared/interfaces/usuario';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor(public authService: AuthService, public menuControl: MenuController) { }

  ngOnInit() {
  }
  addUser(nome, email, senha, cpf, idade) {
    const userData: Usuario = {
      nome: nome.value,
      cpf: cpf.value,
      idade: idade.value
    };

    this.authService.RegisterUser(email.value, senha.value, userData).then((res) => {

    })
      .catch((error) => {
        let msg = "";
        switch (error.code) {
          case "auth/invalid-email":
            msg = "O endereço de E-mail está em um formato incorreto.";
            break;
          case "auth/wrong-password":
            msg = "A Senha digitada precisa ter no mínimo 6 números.";
            break;
          default:
            msg = "Erro ao Realizar o cadastro de usuário.";
        }
        window.alert(msg);
      })
  }
  ionViewWillEnter() {
    this.menuControl.enable(false);
  }
}