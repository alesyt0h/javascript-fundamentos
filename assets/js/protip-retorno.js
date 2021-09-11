function crearPersona(nombre, apellido) {
    return { nombre, apellido }
}

const crearPersonaFlecha = (nombre, apellido) => {
    return {
        nombre,
        apellido
    }
};

const crearPersonaFlechaEnUnaSolaLinea = (nombre, apellido) => ({nombre, apellido});

const persona = crearPersona('Alejandro','Ortigosa');
const personaFlecha = crearPersonaFlecha('Alejandro','Ortigosa');
const personaFlechaSolaLinea = crearPersonaFlechaEnUnaSolaLinea('Alejandro','Ortigosa');

console.log(persona);
console.log(personaFlecha);
console.log(personaFlechaSolaLinea);



function imprimeArgumentos(){
    console.log(arguments);
}

// En una función de flecha arguments no existe, si tenemos que trabajar con los argumentos en una función de flecha deberiamos usar el operador spread.
const imprimeArgumentosFlecha = (edad, ...arguments) => {
    console.log({edad,arguments});
    return arguments;
}

imprimeArgumentos(10,true,false,'Alejandro','Hola');
const [casado, vivo, nombre, saludo] = imprimeArgumentosFlecha(10,true,false,'Alejandro','Hola');
console.log({casado, vivo, nombre, saludo})
// const vivo = argumentos[0];
// const vivo = argumentos[1];
// console.log({argumentos});

// Entre brackets debido a que quiero EXTRAER lo que me esta retornando
const {apellido: nuevoApellido} = crearPersona('Alejandro','Ortigosa');
console.log({nuevoApellido})



const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster']
};

// const imprimePropiedades = (personaje) => {
//     console.log('nombre',personaje.nombre);
//     console.log('codeName',personaje.codeName);
//     console.log('vivo',personaje.vivo);
//     console.log('trajes',personaje.trajes);
//     console.log('edad',personaje.edad);
// }

const imprimePropiedades = ({nombre, codeName, vivo, edad = 15, trajes}) => {

    // edad = edad || 0;

    console.log({nombre})
    console.log({codeName}) 
    console.log({vivo}) 
    console.log({edad}) 
    console.log({trajes})
}

imprimePropiedades(tony);