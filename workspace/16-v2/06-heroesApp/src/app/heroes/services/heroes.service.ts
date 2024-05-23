import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

import { Hero } from '../interfaces';
import { environments } from 'src/environments/environments';


@Injectable( { providedIn: 'root' } )
export class HeroesService {

  private baseUrl: string = environments.baseUrl;

  constructor( private http: HttpClient ) { }

  geHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>( `${ this.baseUrl }/heroes` );
  }

  getHeroById( id: string ): Observable<Hero | undefined> {
    return this.http.get<Hero>( `${ this.baseUrl }/heroes/${ id }` )
      .pipe(
        catchError( error => of( undefined ) )
      );
  }

  getSuggestions( query: string ): Observable<Hero[]> {
    return this.http.get<Hero[]>( `${ this.baseUrl }/heroes?q=${ query }&_limit=6` );
  }

}
