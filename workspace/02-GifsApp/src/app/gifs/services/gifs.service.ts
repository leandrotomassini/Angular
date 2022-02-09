import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = "fwHVLO449TE0bty2sFoKDrDRETR2g4F3";
  private _historial: string[] = [];

  constructor(private http: HttpClient) { }

  buscarGifs(query: string): void {

    query = query.trim().toLocaleLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
    }

    this.http.get('https://api.giphy.com/v1/gifs/search?api_key=fwHVLO449TE0bty2sFoKDrDRETR2g4F3&q=dragon ball z&limit=10&lang=es')
      .subscribe(
        (resp: any) => {
          console.log(resp.data);
        }
      );


  }

  get historial(): string[] {
    return [...this._historial];
  }

}
