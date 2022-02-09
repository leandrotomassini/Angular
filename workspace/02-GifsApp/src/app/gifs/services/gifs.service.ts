import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = "fwHVLO449TE0bty2sFoKDrDRETR2g4F3";
  private _historial: string[] = [];

  public resultados: Gif[] = [];

  constructor(private http: HttpClient) { }

  buscarGifs(query: string): void {

    query = query.trim().toLocaleLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
    }

    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=fwHVLO449TE0bty2sFoKDrDRETR2g4F3&limit=10&q=${query}&lang=es`)
      .subscribe(
        (resp) => {
          console.log(resp.data);
          this.resultados = resp.data;
        }
      );


  }

  get historial(): string[] {
    return [...this._historial];
  }

}
