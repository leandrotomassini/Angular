import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  constructor(private _gifsService: GifsService) { }

  get historial(): string[] {
    return this._gifsService.historial.slice(0,10);
  }
}
