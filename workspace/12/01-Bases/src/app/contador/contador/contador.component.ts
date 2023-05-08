import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{title}}</h1>
        <h3>La base es <strong>{{base}}</strong></h3>

        <button (click)="sumar(base)">+{{base}}</button>

        <span>{{ numero }}</span>

        <button (click)="sumar(-base)">-{{base}}</button>
    `,
    styleUrls: ['./contador.component.css']
})
export class ContadorComponent {

    title: string = 'Contador App';
    numero: number = 0;
    base: number = 5;

    sumar(cantidad: number = 1): void {
        (this.numero == 0 && cantidad < 0) ?
            this.numero = 0 :
            this.numero += cantidad;
    }
}