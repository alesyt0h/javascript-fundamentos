class Rectangulo {

    #area = 0;

    constructor(base = 0, altura = 0){
        this.base = base;
        this.altura = altura;

        this.#area = base * altura;
    }

    #calcularArea(){
        return console.log(this.#area * 2);
    }

    get calcular(){
        return this.#calcularArea;
    }

}

const rectangulo = new Rectangulo(10,15);
// rectangulo.area = 100; // No deberia poder hacer esto, por eso usaremos propiedades privadas
rectangulo.calcular()

console.log(rectangulo);

const numeroString = '40'

console.log('Numero',numeroString)
console.log('Numero',numeroString * 1)