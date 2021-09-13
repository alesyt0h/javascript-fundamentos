/**
* Dias de semana abrimos a las 11,
* pero los fines de semana abrimos a las 9
*/

// Entra a un sitio web, para consultar si esta abierto hoy....

const dia = 1; // 0: Domingo... 1: Lunes....
const horaActual = 11;

let horaApertura;
let mensaje; // = (dia === 0 || dia === 6) ? 'Fin de semana' : 'Día de semana'  // Esta abierto, Está cerrado, hoy abrimos a las XX

// if (dia === 0 || dia === 6){
// if ( [0,6].includes(dia) ){
//     console.log('Fin de semana');
//     horaApertura = 9;
// } else {
//     console.log('Día de semana');
//     horaApertura = 11;
// }

//[0,6].includes(dia) ESTO es very good condition
horaApertura = ([0,6].includes(dia)) ? 9 : 11; 

// if (horaActual >= horaApertura){
//     mensaje = 'Esta abierto';
// } else {
//     mensaje = `Está cerrado, hoy abrimos a las ${horaApertura}`;
// }

mensaje = (horaActual >= horaApertura) ? 'Esta abierto' : `Está cerrado, hoy abrimos a las ${horaApertura}`;

console.log({horaApertura, mensaje})