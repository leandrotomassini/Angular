import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  termino: string = "";

  buscar() {
    this.onEnter.emit(this.termino);
  }

}
