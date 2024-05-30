import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SideMenuComponent } from './components/side-menu/side-menu.component';



@NgModule( {
  declarations: [
    SideMenuComponent
  ],
  exports: [
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
} )
export class SharedModule { }
