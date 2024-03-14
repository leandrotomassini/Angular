import { Component, EventEmitter, Output } from '@angular/core';

import { Character } from '../../interfaces';

@Component( {
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: [ './add-character.component.css' ]
} )
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    id: '',
    name: '',
    power: 0
  };

  emitCharacter(): void {
    console.log( this.character );
    if ( this.character.name.length === 0 ) return;
    this.onNewCharacter.emit( this.character );
    this.character = { id: '', name: '', power: 0 };
  }

}
