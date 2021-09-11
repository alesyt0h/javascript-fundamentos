const personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War'
};

console.log(personaje);
console.log('Nombre:',personaje.nombre);
console.log('Nombre:',personaje['nombre']);
console.log('Edad:',personaje.edad);
console.log('Coords:',personaje.coords);
console.log('Latitud:',personaje.coords.lat);
console.log('No. Trajes:',personaje.trajes.length);
console.log('Ultimo Traje:',personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log('Vivo:',personaje[x]);

console.log('Última película:', personaje["ultima-pelicula"])



// Más detalles

delete personaje.edad;
console.log(personaje);

personaje.casado = true;

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

// Bloquea el objeto para que las propiedas no sean cambiadas, borradas o añadidas
// Bloquea las propiedades pero no los objetos dentro de este objeto, habria que hacer otro freeze para ese otro objeto. ej: personaje.direccion
Object.freeze(personaje);

delete personaje.casado;
personaje.dinero = 10000000000;
personaje.casado = false;
personaje.direccion.ubicacion = 'Barcelona'
console.log(personaje);


const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log({propiedades});
console.log({valores});