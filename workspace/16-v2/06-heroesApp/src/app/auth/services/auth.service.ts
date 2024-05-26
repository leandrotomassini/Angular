import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap, catchError, of } from 'rxjs';

import { environments } from 'src/environments/environments';
import { User } from '../interfaces';


@Injectable( {
  providedIn: 'root'
} )
export class AuthService {

  private baseUrL = environments.baseUrl;
  private user?: User;

  constructor(
    private http: HttpClient
  ) { }

  get currentUser(): User | undefined {
    if ( !this.user ) return undefined;
    return structuredClone( this.user );
  }

  login( email: string, password: string ): Observable<User> {
    return this.http.get<User>( `${ this.baseUrL }/users/1` )
      .pipe(
        tap( user => this.user = user ),
        tap( user => localStorage.setItem( 'token', user.id ) )
      );
  }

  checkAuthentication(): Observable<boolean> {
    if ( !localStorage.getItem( 'token' ) ) return of( false );

    const token = localStorage.getItem( 'token' );

    return this.http.get<User>( `${ this.baseUrL }/users/1` )
      .pipe(
        tap( user => this.user = user ),
        map( user => !!user ),
        catchError( err => of( false ) )
      );
  }

  logout() {
    this.user = undefined;
    localStorage.clear();
  }
}
