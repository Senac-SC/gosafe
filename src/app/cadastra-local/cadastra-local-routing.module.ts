import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastraLocalPage } from './cadastra-local.page';

const routes: Routes = [
  {
    path: '',
    component: CadastraLocalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastraLocalPageRoutingModule {}
