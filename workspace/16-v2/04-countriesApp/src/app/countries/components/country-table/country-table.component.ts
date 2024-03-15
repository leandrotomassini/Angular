import { Component, Input } from '@angular/core';

import { Country } from '../../interfaces';

@Component( {
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styles: `
    img{
      width: 45px;
    }
  `
} )
export class CountryTableComponent {

  @Input()
  public countries: Country[] = [];


}
