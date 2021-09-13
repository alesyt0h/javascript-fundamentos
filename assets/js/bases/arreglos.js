const arr = new Array(10);
console.log(arr)

const array = [];
console.log(array)

let videojuegos = ['Mario 3', 'Megaman','Chrono Trigger'];
console.log({videojuegos});
console.log(videojuegos[0]);

let arregloCosas = [
    true,
    123,
    'Alejandro',
    2 + 3,
    function(){},
    ()=>{},
    {a: 1, b: 2},
    ['X','Megaman','Zero','Dr. Light', [
        'Dr. Willy',
        'Woodman'
    ]]
];

console.log(arregloCosas);
console.log(arregloCosas[6].b);

console.log(arregloCosas[7][3]);
console.log(arregloCosas[7][4][1]);