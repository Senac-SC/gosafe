import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { CrudService } from '../shared/crud.service';
import { Local } from '../shared/interfaces/local';
import { Router } from '@angular/router';

@Component({
  selector: 'app-local-edit',
  templateUrl: './local-edit.page.html',
  styleUrls: ['./local-edit.page.scss'],
})
export class LocalEditPage implements OnInit {
  id = "";
  local: Local = {
    nome: "",
    bairro: "",
    numero: null,
    cep: "",
  }
  constructor(public platform: Platform, public crudService: CrudService, public router: Router) { }

  ngOnInit() {
    let url = this.platform.url().split("/");
    this.id = url[url.length - 1] || "";

    this.crudService.getlocalList().doc(this.id).get().forEach(res => {
      let dataLocal = res.data();
      this.local = dataLocal as Local;
      
    })
  }

  onFormSubmit(form) {
    if (!form.valid) {
      return false;
    }
    else {
      this.crudService.updateLocal(this.id, form.value).then(res => {
        form.reset();
        this.router.navigate(['/local']);
      }).catch(error => console.log(error));
    }

  }
}
