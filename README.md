# Consola, Importaciones, Prompts, Alerts y Confirms

* Historia de JavaScript
* Uso de JavaScript en la industria actual
* Creación de variables y constantes
* Introducción a la consola de JavaScript
* Declaración de variables de forma secuencial usando `,`
```javascript
let f = 30, 
    g = 'Spiderman', 
    h = 10;
```
* Depuración y breakpoints
* Problemas con la declaración de variables con **var**
* Prompts, alerts y confirms
* `console.table` - `console.warn & .error & info`

---

# Primitivos, Arrays, Objetos y funciones

* ¿Qué son los primitivos? `boolean` `null` `undefined` `number` `string` `symbol`
* Palabras reservadas - Posibilidad de usar variables extrañas como `π` o código ofuscado `var \u006C\u006F\u006C\u0077\u0061\u0074 = 'I'm an string'`
* Arreglos - Se pueden añadir multiples tipos de datos a un arreglo: (strings, numeros, funciones, funciones de flecha, arrays, objetos...) 
```javascript
let arregloCosas = [
    2 + 3,
    function(){},
    ()=>{},
    {a: 1, b: 2},
    ['X','Megaman','Zero','Dr. Light', [
        'Dr. Willy',
        'Woodman'
    ]]
];
```
* Console.log usando `{}` para que el el output en consola sea mas claro ej: `console.log({indice}) = {indice: 'Soy un string'}` 
* Console.time y Console.timeEnd - Imprime un Output en consola del tiempo tomado en ejecutar las siguientes lineas debajo de `console.time` hasta que llega al `console.timeEnd`
* Objetos literales - `Object.Freeze(objectToFreeze)` Permite bloquear el añadido, borrado o modificación dentro de ese objeto, pero no se aplicaria a objetos dentro de ese objeto, habría que ejecutar otro `Object.freeze`
* Borrar propiedades de los objetos con `delete objeto.propiedad`
* Propiedades y valores del objeto: `Object.getOwnPropertyNames(object)` - `Object.values(object)`
* Funciones básicas 
* Funciones de flecha
* Retorno de las funciones - se puede hacer un return de objetos: `return {1:10,3:20}`
* Function 'Arguments' - usando `arguments` dentro de una función se podrian extraer todos los argumentos pasados a dicha función, pero en una función de flecha **arguments** no esta definido, habría que pasarle el argumento rest `...arguments`
* **Referenciación en JavaScript**. Uso del operador spread para romper la referencia. En arrays, si se usara otra variable para almacenar un Array, y dicha nueva variable se añadiese un valor usando `.push()` u otro método de adición, tanto el array antiguo como el nuevo tendrian este valor, habría que romper dicha referencia, se puede usar tanto `.slice()` como `[...arrayDeseada]` para romper la referencia creando un nuevo arreglo, siendo el operador spread una mejor opción debido a su simpleza en código y a su más rápido tiempo de ejecución.

---

# Ciclos y estructuras de control

* If y Else - Manera inteligente de evitar usar demasiados If - Else como para el siguiente ejemplo:
```javascript
const dias = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miércoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sábado',
}

const hoy = new Date();
let dia = hoy.getDay();

console.log(dias[dia] || 'Día no definido');
```
* Lógica booleana
* Operadores y operadores de asignación
* Operador condicional ternario - `horaApertura = ([0,6].includes(dia)) ? 9 : 11` - Manera inteligente de comprobar si el dia es 0 o 6, creandolo como un array
* Concatenacion de condiciones con el operador de ternario:
```javascript
const grado = (nota >= 95) ? 'A+' : 
              (nota >= 75) ? 'C+' :
              (nota >= 70) ? 'C'  : 'F';
```
* Switch
* While y Do While
* For, For in, For of

---

# Clases y Propiedades Privadas (ESNext)

* **Clases** - Por estándar el nombre de la clase empiezan con mayúsculas
* **Clases extendidas** `extends` - Si se debe usar un constructor en la clase extendida, se debe usar el método `super()` en el nuevo constructor. O para llamar un método con el mismo nombre de la clase extendida `super.miMetodo()`
* Propiedades y métodos estáticos `static`
* **Singletons** - Una clase que solo tenga una instancia a la fuerza y si se intenta crear una nueva instancia devuelva la existente, se usa una propiedad estática y un condicional para devolver la estancia
* Contar instancias creadas de mi clase gracias a un método estático
* Sets y Gets
* Gets estáticos
* **Propiedades privadas** (ESNext) - Las propiedades/métodos privados se crean usando el `#` delante de la propiedad o método. Para poder llamar a un método privado se debería usar un `get()` en la clase que retorne el método privado
* Multiples constructores - Usando método estático antes del constructor podría ejecutar como si fuera otro constructor que me devolviese directamente la instacia de la clase que quiero crear
