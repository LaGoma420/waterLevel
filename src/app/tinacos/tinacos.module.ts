import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TinacosPageRoutingModule } from './tinacos-routing.module';

import { TinacosPage } from './tinacos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TinacosPageRoutingModule
  ],
  declarations: [TinacosPage]
})
export class TinacosPageModule {}
