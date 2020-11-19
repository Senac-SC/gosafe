import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './shared/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  textoApresentacao = " ";
  public appPages = [
    {
      title: 'Local',
      url: 'local',
      icon: 'location'
    },
    {
      title: 'Configurações',
      url: 'configuracoes',
      icon: 'settings'
    },
    {
      title: 'Perfil',
      url: 'perfil',
      icon: 'person'
    },
    {
      title: 'Feed',
      url: 'feed',
      icon: 'chatbubble'
    }
  ]
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public authService: AuthService,
    public router: Router
  ) {
    this.initializeApp();
  }
  ngOnInit() {
    this.textoApresentacao = this.authService.emailUser;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logout() {
    this.authService.SignOut();
    this.router.navigate(["login"]);
  }
}
