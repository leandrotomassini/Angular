import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { SidebarModule } from 'src/app/@core/components/sidebar/sidebar.module';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SidebarModule
  ],
  exports: [
    AboutComponent
  ]
})
export class AboutModule { }
