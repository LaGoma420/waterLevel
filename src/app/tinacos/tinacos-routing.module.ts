import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TinacosPage } from './tinacos.page';

const routes: Routes = [
  {
    path: '',
    component: TinacosPage
  },  {
    path: 'tinaco',
    loadChildren: () => import('./tinaco/tinaco.module').then( m => m.TinacoPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TinacosPageRoutingModule {}
