import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { YoutubePipe } from '../pipes/youtube.pipe';
import { DomSecurePipe } from '../pipes/dom-secure.pipe';
import { SidebarModule } from './sidebar/sidebar.module';
import { NotFoundComponent } from './not-found/not-found.component';
const COMPONENTS = [
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    NotFoundComponent
];

const PIPES = [
  YoutubePipe,
  DomSecurePipe
];
@NgModule({
  declarations: [
    COMPONENTS,
    PIPES
  ],
  imports: [ CommonModule, RouterModule, SidebarModule ],
  exports: [
    COMPONENTS,
    PIPES
  ]
})
export class ComponentsModule { }
