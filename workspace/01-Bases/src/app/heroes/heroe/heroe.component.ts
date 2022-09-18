import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  nombre: string = 'Ironman';
  edad: number = 45;

  obtenerNombre(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  nombreCapitalizado(): string {
    return `${this.nombre.toUpperCase()}`;
  }

  cambiarNombre(): void { 
    this.nombre = 'Spiderman';
  }

  cambiarEdad(): void { 
    this.edad += 5;
  }

  constructor() { }

}
