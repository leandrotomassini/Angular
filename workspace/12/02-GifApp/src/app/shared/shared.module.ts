import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';


import { SidebarComponent } from './sidebar/sidebar.component';
import { HistorialComponent } from './historial/historial.component';


@NgModule({
  declarations: [
    SidebarComponent,
    HistorialComponent
  ],
  exports: [
    SidebarComponent,
    HistorialComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class SharedModule { }
