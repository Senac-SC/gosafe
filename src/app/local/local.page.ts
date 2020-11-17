import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { Local } from '../shared/interfaces/local';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-local',
  templateUrl: './local.page.html',
  styleUrls: ['./local.page.scss'],
})

export class LocalPage implements OnInit {
  textoApresentacao = "Qualquer Coisa";
  arrLocais = [];

  constructor(public alertController: AlertController, public crudService: CrudService, public menuControl: MenuController) { }

  ngOnInit() {


    let localRes = this.crudService.getlocalList();
    localRes.snapshotChanges().subscribe(res => {
      this.arrLocais = [];
      res.forEach(item => {
        let localData = item.payload.doc.data();
        localData['$key'] = item.payload.doc.id;
        this.arrLocais.push(localData as Local);
      }
      )

    }
    )
  }
  async excluirLocal(uid) {
    const alert = await this.alertController.create({
      header: "Confirmar Exclusão",
      message: "Deseja Confirmar Exclusão?",
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'success'
        },
        {
          text: 'Confirmar',
          handler: () => {
            this.crudService.removeLocal(uid);

            this.textoApresentacao = "Excluido";
          },
          cssClass: 'danger'
        }
      ]
    })
    await alert.present();
  }
  ionViewWillEnter() {
    this.menuControl.enable(true);
  }
}
