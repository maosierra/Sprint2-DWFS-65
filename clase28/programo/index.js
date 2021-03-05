function obtenerNombre(callback) {
    let nombre = prompt('Ingresa tu nombre');
    callback(nombre)
}

function saludar(nombre) {
    alert('Hola ' + nombre);
}

function saludarTerminal(nombre) {
    console.log('Hola ' + nombre);
}

// obtenerNombre(saludarTerminal);
// obtenerNombre(saludar);

// let numeros = [1, 2, 3, 4, 'hola elemt 5'];
// numeros.forEach(cadaItem);

// function cadaItem(n) {
//     console.log('iterando ' + n);
// }

// Calculadora
let suma = function(n1, n2) {
    return n1 + n2;
}

let resta = (n1, n2) => {
    return n1 - n2;
}

let multiplicacion = (n1, n2) => {
    return n1 * n2;
}

let division = (n1, n2) => {
    return n1 / n2;
}

let calculadora =  function(n1, n2, callback) {
    if(typeof(callback) === "function") {
        return callback(n1, n2);
    } else {
        return 'No es una funcion';
    }
}

console.log(calculadora(5, 6, division));