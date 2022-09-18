import { Injectable } from "@angular/core";

import { Personaje } from '../interfaces/dbz.interface';


@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 1500
        },
        {
            nombre: 'Vegeta',
            poder: 7500
        },
    ];

    get personajes(): Personaje[] {
        return [...this._personajes];
    }

    agregarPersonaje(personaje: Personaje): void {
        this._personajes.push(personaje);
    }
}