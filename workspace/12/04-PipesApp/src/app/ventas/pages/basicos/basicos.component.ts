import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  nombreLower: string = 'leAndRo';
  nombreUpper: string = 'leAndRo';
  nombreCompleto: string = 'leAndRo';

  fecha: Date = new Date();

  
}
