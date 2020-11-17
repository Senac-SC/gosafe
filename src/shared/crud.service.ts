import { rendererTypeName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Local } from './interfaces/local';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public ngStore: AngularFirestore) { }

  getlocalList() {
    const localRef = this.ngStore.collection("Locais");
    return localRef;
  }

  setLocal(local) {
    const localData: Local = {
      bairro: local.bairro,
      cep: local.cep,
      nome: local.nome,
      numero: local.numero
    }
    return this.ngStore.collection("Locais").add(localData);
  }

  updateLocal(uid, local) {
    const localData: Local = {
      bairro: local.bairro,
      cep: local.cep,
      nome: local.nome,
      numero: local.numero
    }
    const localRef: AngularFirestoreDocument<any> = this.ngStore.doc("Locais/" + uid);
    return localRef.update(localData);
  }

  removeLocal(uid) {
    const localRef: AngularFirestoreDocument<any> = this.ngStore.doc("Locais/" + uid);
    return localRef.delete();
  }

}
