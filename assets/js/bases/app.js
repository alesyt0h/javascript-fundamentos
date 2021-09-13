console.log(miNuevoNombre + ' Jimenez')

// alert('Hola desde app.js');

console.log(console.log('Hola Mundo'));

let a = 10;
let b = 20;

let c = 30, d = 20, x = c + d;

let f = 30, 
    g = 'Spiderman', 
    h = 10,
    i = 'Hola ',
    z = f + g;

const saludo = i + g;

console.log('%c Mis variables','color:cyan; font-weight: bold');

console.log('x =',x);
console.log({x});
console.warn('f = ' + f);
console.error(`g = ${g}`);
console.info('Esto es un console.info');

console.log('------------------------------');

console.table({a, b, c, d, f, g, h, i, z, x});

console.log(saludo);


c = 'Hola de nuevo';

// Se sobrescriben en el Window al usar VAR
var outerWidth = 1000000;
var outerHeight = 600;

// Al intentar acceder con var, devolveria undefined, siendo esto un peligro y posiblemente dificil descubrir el error, con let seria mas fácil pues simplemente va a devolver un error de que no se puede acceder al valor antes de que esta sea inicializada
let miNuevoNombre = 'Alejandro Ortigosa';