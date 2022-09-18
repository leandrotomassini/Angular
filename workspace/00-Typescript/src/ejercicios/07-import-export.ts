
import { Producto, calculaISV } from './06-desestructuracion-arr';
 
const carritoCompras: Producto[] = [
    {
        desc: 'Producto bueno',
        precio: 200
    },
    {
        desc: 'Producto nuevo',
        precio: 3400
    }
];

const [total, isv] = calculaISV(carritoCompras);

console.log('Total', total);
console.log('ISV', isv);




