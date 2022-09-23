import { Component } from '@angular/core';

import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {

  // i18nselect
  nombre: string = 'Leandro';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  };

  // i18nplural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Leandro', 'Eduardo', 'Fernando', 'Yamila'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos dos clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  };

  constructor() { }

  cambiarCliente() {
    this.nombre = 'Melissa';
    this.genero = 'femenino';
  }

  borrarCliente() {
    this.clientes.pop();
  }

  // Keyvalue pipe
  persona = {
    nombre: 'Leandro',
    edad: 29,
    dirección: 'Merlo, Argentina'
  };

  // Json Pipe
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

  // Async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa.');
    }, 3500);
  });
}

