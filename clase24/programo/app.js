// Funciones
// function cuadrado(numero) {
//     return numero * numero;
// }
// console.log(cuadrado(2));

// let cuadrado2 = function(numero) {
//     return numero * numero;
// }
// console.log(cuadrado2(3));

// let cuadrado3 = (numero) => {
//     return numero * numero;
// }
// console.log(cuadrado3(4));

// let resultado = (function(numero) {
//     return numero * numero;
// })(10);
// console.log(resultado);

// let lista_numero = [1, 2, 3, 4, 5];

// lista_numero.forEach(function(numero) {
//     console.log(numero);
// });

// Scope
// let scope = 'Soy global';

// function probarScope() {
//     let scope = 'Soy local';
//     console.log(scope);;
// }

// probarScope();

//Segundo ejemplo
// let scope2 = 'Soy global2';

// testScope2();

// function testScope2() {
//     console.log('modificando scope2 dentro de la funcion', scope2);
    
//     scope2 = 'soy local2';
// }

// Hoisting en funciones

// saluda('Mauricio');

// function saluda(nombre) {
//     console.log('Hola ' + nombre);
// }

function sumaNumeros (numero1, numero2) {
    if(typeof(numero1) !== 'number') {
        throw new Error('El parametro 1 no es un numero');
    } else if(typeof(numero2) !== 'number') {
        throw new Error('El parametro 2 no es un numero');
    }

    return numero1 + numero2;
}

try {
    console.log(sumaNumeros('a', 2)); 
} catch (error) {
    console.log(error);
}

console.log('hola despues de suma');
console.log('hola 3');