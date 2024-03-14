import { Component } from '@angular/core';

import { Character } from '../../interfaces';
import { DbzService } from '../../services/dbz.service';


@Component( {
  selector: 'app-dbz-main',
  templateUrl: './main.component.html',
  styleUrls: [ './main.component.css' ]
} )
export class MainComponent {

  constructor( public dbzService: DbzService ) { }


  get characters(): Character[] {
    return [ ...this.dbzService.characters ];
  }

  onDeleteCharacter( id: string ): void {
    this.dbzService.deleteCharacterById( id );
  }

  onNewCharacter( character: Character ) {
    this.dbzService.addCharacter( character );
  }
}
