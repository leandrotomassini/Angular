import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css']
})
export class NumerosComponent implements OnInit {

  ventasNetas: number = 29938283.2232;
  porcentaje: number = 0.485878;

  constructor() { }

  ngOnInit(): void {
  }

}
