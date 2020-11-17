import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocalEditPageRoutingModule } from './local-edit-routing.module';

import { LocalEditPage } from './local-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocalEditPageRoutingModule
  ],
  declarations: [LocalEditPage]
})
export class LocalEditPageModule {}
