import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoDisplayPageRoutingModule } from './info-display-routing.module';

import { InfoDisplayPage } from './info-display.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoDisplayPageRoutingModule
  ],
  declarations: [InfoDisplayPage]
})
export class InfoDisplayPageModule {}
