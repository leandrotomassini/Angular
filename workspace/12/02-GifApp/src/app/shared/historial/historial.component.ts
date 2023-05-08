import { Component } from '@angular/core';

import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss'],
})
export class HistorialComponent {


  constructor(private gifsService: GifsService) { }


  get historial() {
    return this.gifsService.historial;
  }

  buscar(termino: string) {
    this.gifsService.buscarGifs(termino);
  }

}
