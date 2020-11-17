import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public authService: AuthService, public router: Router, public menuControl: MenuController) { }

  ngOnInit() {
  }

  logIn(email, password) {
    this.authService.SignIn(email.value, password.value)
      .then((res) => {

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
          case "auth/wrong-password":
            msg = "A Senha digitada está incorreta.";
            break;
          default:
            msg = "Erro ao Realizar o login";
        }
        window.alert(msg);
      })
  }
  resetPassword(email) {
    this.authService.resetPassword(email.value);
  }
  ionViewWillEnter() {
    this.menuControl.enable(false);
  }

}
