import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoDisplayPage } from './info-display.page';

const routes: Routes = [
  {
    path: '',
    component: InfoDisplayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoDisplayPageRoutingModule {}
