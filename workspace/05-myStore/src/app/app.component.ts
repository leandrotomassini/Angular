import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  showImg = true;

  products: Product[] = [{
    id: '0',
    name: 'EL mejor juguete',
    price: 565,
    image: './assets/images/toy.jpg'
  },
  {
    id: '1',
    name: 'Bicicleta casi nueva',
    price: 356,
    image: './assets/images/bike.jpg'
  },
  {
    id: '2',
    name: 'Colleción de albumnes',
    price: 34,
    image: './assets/images/album.jpg'
  },
  {
    id: '3',
    name: 'Mis libros',
    price: 23,
    image: './assets/images/books.jpg'
  },
  {
    id: '4',
    name: 'Casa para perro',
    price: 34,
    image: './assets/images/house.jpg'
  },
  {
    id: '5',
    name: 'Gafas',
    price: 3434,
    image: './assets/images/glasses.jpg'
  }];

  onLoaded(img: string) {
    console.log('log padre', img);
  }

  toggleImg(){
    this.showImg = !this.showImg;
  }
}
