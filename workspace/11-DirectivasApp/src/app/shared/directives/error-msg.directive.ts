import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {

  @Input() color: string = 'red';
  @Input() mensaje: string = 'Este campo es necesario.';
  htmlElement: ElementRef<HTMLElement>;

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
    console.log('NgOnInit en la directiva');
    this.setColor();
    this.setMensaje();
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this.mensaje;
  }

  setMensaje():void{
    // this.htmlElement.nativeElement.innerText = 
  }
}
