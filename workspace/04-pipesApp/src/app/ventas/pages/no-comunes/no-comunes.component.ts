import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'leandro';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Leandro', 'Yamila', 'Coco'];

  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'un cliente esperando.',
    '=2': 'dos clientes esperando.',
    '=3': 'tres clientes esperando.',
    '=4': 'cuatro clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarCliente() {
    if (this.genero == 'masculino') {
      this.genero = 'femenino';
      this.nombre = 'yamila';
    } else {
      this.genero = 'masculino';
      this.nombre = 'leandro';
    }

  }

  borrarCliente() {
    this.clientes.shift();
  }

  // Key Value Pipe
  persona = {
    nombre: 'Leandro',
    edad: 35,
    direccion: 'Otawa, Canadá'
  }

  // Json pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    },
  ];

  // Async pipe
  miObserbable = interval(1000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });
}
