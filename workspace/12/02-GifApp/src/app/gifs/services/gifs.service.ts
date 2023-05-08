import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _apiKey: string = 'BQ13XKEXDFgRsDKMl5fA1iLi1zxhaTK6';
  private _historial: string[] = [];
  private _servicioUrl: string = 'https://api.giphy.com/v1/gifs';

  public resultados: Gif[] = [];

  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultado')) || [];
  }

  get historial() {
    return [...this._historial];
  }

  buscarGifs(query: string = '') {

    query = query.trim().toLocaleLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.slice(0, 10);

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const params = new HttpParams()
      .set('api_key', this._apiKey)
      .set('linit', '10')
      .set('q', query);

    this.http.get<SearchGifsResponse>(`${this._servicioUrl}/search?`, { params })
      .subscribe((resp) => {
        this.resultados = resp.data;
        localStorage.setItem('resultado', JSON.stringify(this.resultados));
      });

  }

}
