import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap, Observable, map, of } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _auth: any;


  constructor(private http: HttpClient) { }

  verificaAutenticacion(): Observable<boolean> | boolean | any {

    if (!localStorage.getItem('token')) {
      return of(false);
    }

    return this.http.get(`${this.baseUrl}/usuarios/1`)
      .pipe(
        map(auth => {
          this._auth = auth;
          return true;
        })
      );
  }

  get auth() {
    return { ...this._auth };
  }

  login() {
    return this.http.get(`${this.baseUrl}/usuarios/1`)
      .pipe(
        tap((auth) => this._auth = auth),
        tap((auth: any) => localStorage.setItem('token', auth.id))
      );
  }

}
