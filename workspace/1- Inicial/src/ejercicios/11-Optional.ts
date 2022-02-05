interface Pasajero {
    nombre: string;
    hijos?: string[];
}


const pasajero1: Pasajero = {
    nombre: 'Leandro'
}

const pasajero2: Pasajero = {
    nombre: 'Yamila',
    hijos: ['Mateo', 'Ciro']
}

function imprimeHijos(pasajero: Pasajero): void {
    const cuantosHijos = pasajero.hijos?.length || 0;
    console.log(cuantosHijos);
}

imprimeHijos(pasajero1);