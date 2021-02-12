const datos = ['carro', 2, 5, true, "bicicleta", 0, false, "avion", 9, 100];
const meses = ['enero', 'febrero', 'marzo'];

let resultado = 0;
const array_no_numero = [];
let contador = 0;


datos.forEach(dato => {
    if (typeof (dato) === 'number') {
        resultado += dato;
        contador++;
    } else {
        array_no_numero.push(dato);
    }
});

console.log('La suma de los numeros es: ', resultado, contador);
console.log('El array de valores no numericos es: ', array_no_numero);    