import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TinacoPage } from './tinaco.page';

const routes: Routes = [
  {
    path: '',
    component: TinacoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TinacoPageRoutingModule {}
