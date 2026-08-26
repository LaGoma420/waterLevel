import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TinacoPageRoutingModule } from './tinaco-routing.module';

import { TinacoPage } from './tinaco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TinacoPageRoutingModule
  ],
  declarations: [TinacoPage]
})
export class TinacoPageModule {}
