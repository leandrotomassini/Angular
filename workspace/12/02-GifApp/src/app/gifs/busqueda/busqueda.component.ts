import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss'],
})
export class BusquedaComponent {

  constructor(private gifsService: GifsService) { }

  buscar(event) {
    const valor = event.target.value;

    if (valor.trim().length === 0) { return; }

    this.gifsService.buscarGifs(valor);
  }

}
