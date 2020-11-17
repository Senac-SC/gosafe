import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastra-local',
  templateUrl: './cadastra-local.page.html',
  styleUrls: ['./cadastra-local.page.scss'],
})
export class CadastraLocalPage implements OnInit {

  constructor(public crudService: CrudService, public menuControl: MenuController, public router: Router) { }

  ngOnInit() {
  }

  onFormSubmit(form) {
    if (!form.valid) {
      return false;
    }
    else {
      this.crudService.setLocal(form.value).then(res => {
        form.reset();
        this.router.navigate(['/local']);
      }).catch(error => console.log(error));
    }

  }

  ionViewWillEnter() {
    this.menuControl.enable(false);
  }
}
