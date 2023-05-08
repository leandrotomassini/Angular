import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../shared/shared.module';

import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    BusquedaComponent,
    ResultadosComponent
  ],
  exports: [
    GifsPageComponent,
    BusquedaComponent,
    ResultadosComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    SharedModule
  ]
})
export class GifsModule { }
