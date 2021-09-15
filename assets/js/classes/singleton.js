class Singleton {

    static instancia; // undefined
    nombre = '';

    constructor(nombre = ''){

        // const a = undefined; 
        // console.log(a);   // undefined
        // console.log(!a);  // true
        // console.log(!!a); // false

        console.log(Singleton.instancia)

        if (!!Singleton.instancia){  // if (Singleton.instance) no seria lo mismo? -- !Singleton.instance negaria el valor en caso de que no hubiera nada  -- !!Singleton.instance volveria a negar la negación, produciendo un true 
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;

        // return this;
    }

}

const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('Black Panther');
console.log(`Nombre en la instancia1 es: ${instancia1.nombre}`)
console.log(`Nombre en la instancia2 es: ${instancia2.nombre}`)
console.log(`Nombre en la instancia3 es: ${instancia3.nombre}`)