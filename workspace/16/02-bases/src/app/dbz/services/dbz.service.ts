import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
    providedIn: 'root'
})
export class DbzService {


    public characters: Character[] = [
        {
            id: uuid(),
            name: 'Krillin',
            power: 1000
        },
        {
            id: uuid(),
            name: 'Goku',
            power: 9500
        },
        {
            id: uuid(),
            name: 'Vegeta',
            power: 7500
        },
    ];

    constructor() { }

    addCharacter(character: Character): void {
        const newCharacter: Character = { ...character, id: uuid() };
        this.characters.push({ ...character });
    }

    deleteCharacterById(id: string): void {
        this.characters = this.characters.filter(character => character.id !== id);
    }

}