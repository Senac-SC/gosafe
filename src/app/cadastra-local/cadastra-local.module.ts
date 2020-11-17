import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastraLocalPageRoutingModule } from './cadastra-local-routing.module';

import { CadastraLocalPage } from './cadastra-local.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastraLocalPageRoutingModule
  ],
  declarations: [CadastraLocalPage]
})
export class CadastraLocalPageModule {}
