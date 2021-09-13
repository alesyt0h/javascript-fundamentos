function saludar(string) {
    console.log(arguments)
    console.log('Hola ' + string);
    return {1:10,3:20};

    // Esto nunca se va a ejecutar
    console.log('Soy un código que está después del return')
};

const saludar2 = function(nombre) {
    console.log('Hola', nombre);
};

const saludarFlecha = () => {
    console.log('Hola Flecha')
}
const saludarFlecha2 = (nombre) => {
    console.log('Hola ' + nombre)
}

const retornoDeSaludar = saludar('Alejandro', 40, true, 'Costa Rica');
console.log(retornoDeSaludar);
console.log(retornoDeSaludar[3]);
saludar('Natalia');
saludar2('Alejandrito');
saludarFlecha();
saludarFlecha2('Alexander');

function sumar(a, b){
    return a + b;
}

const sumarFlecha = (a,b) => {
    return a + b;
} 

const sumarFlechaAbreviado = (a,b) => a + b;

function getAleatorio(){
    return Math.random();
}

const getAleatorioFlechaAbreviado = () => Math.random();

console.log('Suma:',sumar(1,2));
console.log('Suma Flecha:',sumarFlecha(1,2));
console.log('Suma Flecha Abreviado:',sumarFlechaAbreviado(1,2));

console.log('Random:',getAleatorio());
console.log('Random Flecha Abreviado:',getAleatorioFlechaAbreviado());