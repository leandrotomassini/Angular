import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/default.png';
  counter = 0;

  constructor() {
    console.log('Soy el constructor. img value => ', this.img);
  }

  ngOnDestroy(): void {
    console.log('Soy el on destroy. img value => ', this.img);
  }

  ngAfterViewInit(): void {
    console.log('Soy el after init. img value => ', this.img);
  }

  ngOnchanges(){
    console.log('Soy el ng on changes img value => ', this.img);

  }

  ngOnInit(): void {
    window.setInterval( () => {
      this.counter += 1;
      console.log('Run counter');
    }, 1000);
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('log hijo');
    this.loaded.emit(this.img);
  }

}
