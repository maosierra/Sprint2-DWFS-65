// var usuarioValido = 'acamica';
// var contrasenaValida = '12345';

// do {
//     var usuario = prompt("Ingrese Usuario:");
//     var contrasena = prompt("Ingresese contraseña:");
// } while (!validacion(usuario, contrasena));

// function validacion(usuario, contrasena) {
//     if (usuario === usuarioValido && contrasena === contrasenaValida) {
//         return true;
//     } else {
//         return false;
//     }
// } 

// Primer ejercicio
// var suma = 0;
// for (var index = 0; index < 5; index++) {
//     suma += parseInt(prompt("Ingrese un numero"));
// } 
// alert(suma);

//Segundo ejercicio - PROMEDIO
// var suma = 0;
// for (var index = 0; index < 5; index++) {
//     suma += parseInt(prompt("Ingrese un numero"));
// } 
// alert(suma / 5);

// Tercer ejercicio - Edades
// var mayoresEdad= 0;
// do {
//     var edad = parseInt (prompt ("Ingrese su edad"));
//     if(edad >=18) {
//         mayoresEdad++;
//     }  
// } while (edad!==0);
// alert ("Mayores de edad " + mayoresEdad);

//Cuarto Ejercicio - Promedio condicional
// var suma = 0;
// var contador = 0;

// do {
//     var entrada = prompt("ingrese un numero");
//     var numero = parseInt(entrada);
//     if (numero > 0 && numero < 10) {
//         contador++;
//         suma += numero;
//     }
// } while (entrada !== 'salir');

// alert(suma / contador);

// Quinto ejercicio - Pares e Impares

var contapares = 0;
var contaimpares = 0;

do {
    var entrada = parseInt(prompt("ingrese un numero"));
    if (entrada % 2 === 0) {
        contapares++;
    }
    else {
        contaimpares++;
    }
} while (entrada !== 0);
if (contapares === contaimpares) {
    alert('La misma cantidad');
} else if (contapares > contaimpares) {
    alert('Tuvieron mas ingresos los pares: ' + contapares);
} else {
    alert("tuvieron mas ingresos los impares: " + contaimpares);
}