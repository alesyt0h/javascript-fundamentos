class Persona {

    static _conteo = 0;
    static get conteo(){
        return Persona._conteo + ' instancias';
    }

    static mensaje(){
        console.log(this.nombre); // undefined
        console.log('Hola a todos, soy un método estático');
    }

    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase'){
        // if (!nombre) throw Error('Necesitamos el nombre');

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;

        Persona._conteo++;
    }

    set setComidaFavorita(comida){
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase(){
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }

}


const spiderman = new Persona('Peter Parker','Spiderman','Te atraparé!');
const ironman = new Persona('Tony Stark','Ironman','Yo soy Ironman');


// console.log(spiderman);
// console.log(ironman);

// spiderman.quienSoy();
// ironman.quienSoy();

spiderman.miFrase();
// ironman.miFrase();

spiderman.setComidaFavorita = 'El pie de cereza de la tía May';
// spiderman.nemesis = 'Duende Verde';

console.log(spiderman.getComidaFavorita);

console.log(spiderman);


console.log('-----------------------');

// Persona._conteo = 2;
console.log('Conteo estático:', Persona._conteo);
console.log('Conteo con un Get Estático:', Persona.conteo);
Persona.mensaje();

Persona.propiedadExterna = 'Hola Mundo';
console.log(Persona.propiedadExterna);
console.log(Persona);