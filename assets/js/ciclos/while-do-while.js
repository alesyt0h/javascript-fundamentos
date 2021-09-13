const coches = ['Ford','Mazda','Honda','Toyota'];

let i = 0;

// while( i < coches.length ){
//     console.log(coches[i]);
//     // i = i + 1
//     // i += 1;
//     i++;
// }

// Son Evaluados como un false y el while no se ejecutaria
//
// undefined
// null
// false

// console.log(coches[10]);
// while( i < coches.length ){  // Seria igual que el codigo de abajo, pero el de abajo es mas limpio, cuando i se salga del length del array devolveria un undefined que es lo mismo que un false en un while, por eso se detendria el while
console.warn('While')
while( coches[i] ){
    if ( i === 1){
        // break;
        i++;
        continue;
    }
    console.log(coches[i]);
    i++;
}

console.warn('Do While')

let j = 0;

do {
    console.log(coches[j]);
    j++;
} while (coches[j]);