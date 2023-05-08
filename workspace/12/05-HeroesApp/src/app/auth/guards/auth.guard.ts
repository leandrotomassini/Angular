import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, Router } from '@angular/router';
import { Observable, pipe, tap } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.authService.verificaAutenticacion()
      .pipe(
        tap(estaAutenticado => {
          if (!estaAutenticado) {
            this.router.navigate(['./auth/login']);
          }
        })
      );
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | boolean {

    return this.authService.verificaAutenticacion().pipe(
      tap(estaAutenticado => {
        if (!estaAutenticado) {
          this.router.navigate(['./auth/login']);
        }
      })
    );
  }
}
