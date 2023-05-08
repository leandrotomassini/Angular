import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BarrasComponent } from './pages/barras/barras.component';
import { BarrasDobleComponent } from './pages/barras-doble/barras-doble.component';
import { DonaHttpComponent } from './pages/dona-http/dona-http.component';
import { DonaComponent } from './pages/dona/dona.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'barra',
        component: BarrasComponent
      },
      {
        path: 'barra-doble',
        component: BarrasDobleComponent
      },
      {
        path: 'dona-http',
        component: DonaHttpComponent
      },
      {
        path: 'dona',
        component: DonaComponent
      },
      {
        path: '**',
        redirectTo: 'barra'
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraficasRoutingModule { }
