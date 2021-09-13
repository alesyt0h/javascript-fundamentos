let a = 10;

if (a >= 10) { // undefined, null, una asignación
    console.log('A es mayor o igual a 10');
} else {
    console.log('A es menor a 10');
}
// console.log('Fin de programa')


const hoy = new Date();
let dia = hoy.getDay(); // 0: Domingo, 1: lunes, 2: martes ....

console.log({dia});

if (dia === 0){
    console.log('Hoy es domingo');
} else if (dia === 1) {

    console.log('Lunes');

    // if (dia ===1){
    //     console.log('Lunes')
    // } else {
    //     console.log('No es lunes ni domingo')
    // }

} else if (dia === 2) {
    console.log('Martes');
} else {
    console.log('No es lunes, martes o domingo...');
}

// Sin usar If Else, o Switch, únicamente objetos
// dia = 3; // 0: domingo

const dias = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miércoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sábado',
}

const diasConProcedimientos = {
    0: () => 'Domingo - 0',
    1: () => 'Lunes - 1',
    2: () => 'Martes - 2',
    3: () => 'Miércoles - 3',
    4: () => 'Jueves - 4',
    5: () => 'Viernes - 5',
    6: () => 'Sábado - 6',
}

const diasConArray = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

console.log(dias[dia] || 'Día no definido');
console.log(diasConProcedimientos[dia]() || 'Día no definido');
console.log(diasConArray[dia] || 'Día no definido');