import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] = [];


  buscarGifs(query: string): void {
    this._historial.unshift(query);
    console.log(this._historial);
  }



  get historial(): string[] {
    return [...this._historial];
  }



}
