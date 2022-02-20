import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SidebarModule } from 'src/app/@core/components/sidebar/sidebar.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SidebarModule
  ],
  exports: [
    HomeComponent
  ],
})
export class HomeModule { }
