import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { SidebarModule } from 'src/app/@core/components/sidebar/sidebar.module';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SidebarModule
  ],
  exports: [
    ContactComponent
  ]
})
export class ContactModule { }
