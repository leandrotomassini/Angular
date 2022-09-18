interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Cancion 1',
    detalles: {
        autor: 'Autor 1',
        anio: 1990
    }
};

const { volumen, segundo, cancion, detalles } = reproductor;
const { autor, anio } = detalles;

// console.log('El volumen actual es de: ', volumen);
// console.log('El segundo actual es de: ', segundo);
// console.log('La cancion es: ', cancion);
// console.log('El autor es: ', autor);
// console.log('El año es: ', anio);

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

const [p1, p2, p3] = dbz;

console.log('Personaje 1', p1);
console.log('Personaje 2', p2);
console.log('Personaje 3', p3);