import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Pagina1Component } from './pages/pagina1/pagina1.component';
import { MuestraNombreComponent } from './components/muestra-nombre/muestra-nombre.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Pagina1Component,
    MuestraNombreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
