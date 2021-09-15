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

class Heroe extends Persona{
    
    clan = 'Sin clan';

    constructor(nombre, codigo, frase){
        
        super(nombre, codigo, frase);

        this.clan = 'Los Avengers';

    }
    
    quienSoy(){
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        super.quienSoy();
    }

}

const spiderman = new Heroe('Peter Parker','Spiderman','Te atraparé!');
// const spiderman = new Heroe('Pepe');

console.log(spiderman);
spiderman.quienSoy();