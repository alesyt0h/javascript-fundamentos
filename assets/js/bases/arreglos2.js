let juegos = ['Zelda','Mario','Metroid','Chrono Trigger'];
console.log('Largo:',juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];
console.log({primero, ultimo});

juegos.forEach( (juego,indice, arr) => {
    console.log({indice,juego,arr});
});

let nuevaLongitud = juegos.push('F-Zero');
console.log({nuevaLongitud, juegos});

nuevaLongitud = juegos.unshift('Fire Emblem');
console.log({nuevaLongitud, juegos});

let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});

let pos = 1;
console.log(juegos);
// Debido a que en JavaScript todo pasa por referencia, con las llaves estaria computando el nuevo valor de juegos despues que le borremos esos dos valores de la linea de abajo
console.log({juegos});
let juegosBorrados = juegos.splice(pos,2);
console.log({juegosBorrados, juegos});

let metroidIndex = juegos.indexOf('Metroid');
console.log(metroidIndex);


// TODO: Referencia