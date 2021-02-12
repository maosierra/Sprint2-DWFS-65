// #1
// const numeros = [];

// do {
//     var entrada = prompt("ingrese un numero");
//     var numero = parseInt(entrada);
//     console.log(numero);
//     if (!isNaN(numero)) {
//         numeros.push(numero);
//     }
// } while (entrada !== 'Stop');

// console.log(numeros);

// #2
// const numerosPares = [];
// const numerosImpares = [];
// const noNumericos = [];

// do {
//     var entrada = prompt("ingrese un numero");
//     var numero = parseInt(entrada);
//     if(numero !== 0) {
//         if(isNaN(numero)) {
//             noNumericos.push(entrada);
//         } else if( (numero%2) === 0 ) {
//             numerosPares.push(numero);
//         } else {
//             numerosImpares.push(numero);
//         }
//     }

// } while (entrada !== '0');

// console.log('Numeros pares', numerosPares);
// console.log('Numeros Impares', numerosImpares);
// console.log('No numericos', noNumericos);

//#3
const numeros = [];
do {
    var entrada = prompt("ingrese un numero");
    var numero = parseInt(entrada);
    if (numero !== 0) {
        if (!isNaN(numero)) {
            numeros.push(numero);
        }
    }

} while (entrada !== '0');

numeros.sort(function sortear(a, b) {
    return a - b;
});

numeros.shift();
numeros.pop();
console.log(numeros);