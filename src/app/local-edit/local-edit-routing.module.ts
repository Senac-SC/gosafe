import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocalEditPage } from './local-edit.page';

const routes: Routes = [
  {
    path: '',
    component: LocalEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocalEditPageRoutingModule {}
