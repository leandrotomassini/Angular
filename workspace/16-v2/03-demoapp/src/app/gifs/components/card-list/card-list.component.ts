import { Component, Input } from '@angular/core';

import { Gif } from '../../interfaces';

@Component( {
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
} )
export class CardListComponent{

  @Input()
  public gifs: Gif[] = [];


}
