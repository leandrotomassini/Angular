import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AddCharacterComponent } from './components/add-character/add-character.component';
import { ListComponent } from './components/list/list.component';
import { MainComponent } from './pages/main/main.component';


@NgModule({
  declarations: [
    AddCharacterComponent,
    ListComponent,
    MainComponent,
  ],
  exports: [
    MainComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
