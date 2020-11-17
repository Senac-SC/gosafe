import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { MenuController } from '@ionic/angular';
import { Usuario } from '../shared/interfaces/usuario';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  id = "";
  usuario: Usuario = {
    nome: "",
    cpf: "",
    idade: null
  }
  constructor(
    public authService: AuthService,
    public menuControl: MenuController,
    public router: Router,
    public platform: Platform) { }

  ngOnInit() {
    this.id= this.authService.uidUser;
    console.log(this.id);

    this.authService.getusuarioList().doc(this.id).get().forEach(res => {
      let dataUsuario = res.data();
      this.usuario = dataUsuario as Usuario;
      
    })
  }

  onFormSubmit(form) {
    if (!form.valid) {
      return false;
    }
    else {
      this.authService.updateUser(this.id, form.value).then(res => {
        form.reset();
        this.router.navigate(['/perfil']);
      }).catch(error => console.log(error));
    }

  }
  ionViewWillEnter() {
    this.menuControl.enable(true);
  }

}
