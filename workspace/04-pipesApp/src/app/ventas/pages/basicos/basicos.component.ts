import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  nombreLower: string = 'Leandro';
  nombreUpper: string = 'LEANDRO';
  nombreCompleto: string = 'LEandRo ToMaSSini';

  fecha: Date = new Date();
}
