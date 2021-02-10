console.log('Variables JS');

var numero = 93;
console.log('La varible numero es de tipo: ' + typeof(numero));

var boolean = false;
console.log('La varible boolean es de tipo: ' + typeof(boolean));

var texto = "esto es un texto";
console.log('La varible texto es de tipo: ' + typeof(texto));

var resultado = 10 / 0;
console.log("la variable resultado es de tipo: " + typeof(resultado));

// Convertir numeros
var numeroTexto = "1234.123";
var numero = parseInt(numeroTexto);
var flotante = parseFloat(numeroTexto);

console.log("El valor de 1234.123 pasado a numero: ", numero, flotante);

var noEsUnNumero = "123bc";
var numero2 = parseInt(noEsUnNumero);

console.log(typeof(numero2));

var numeroConvertir = 2345234;
var texto = numeroConvertir.toString();
console.log(texto);

// ventana de confirmacion
var resultadoUsuario = true; //confirm("Acepta las condiciones");

// Condicional con IF
if (resultadoUsuario === true) {
    console.log('Acepto');
} else {
    console.log('Cancelo');
}

// operador ternario
var resultadoTernario = (resultadoUsuario === true) ? "Aceptado" : "Cancelo";
console.log('El valor de ternario es: ' + resultadoTernario);

// Operadores de comparacion: ===, !==, >, <, >=, <=

var numeroCompracion = 10;
if (numeroCompracion < 9) {
    console.log('El numero de comparacion es menor');
} else if (numeroCompracion > 15) {
    console.log('El numero de comparacion es mayor');
} else {
    console.log('El numero de comparacion esta intermedio');
}

// Operadores logicos: && || !

console.log("false && false", false && false);
console.log("false && true", false && true);
console.log("true && true", true && true);

console.log("false || false", false || false);
console.log("false || true", false || true);
console.log("true || false", true || false);
console.log("true || true", true || true);

var hora = 18;
var diaSemana = 'Viernes';

if (hora === 8 || diaSemana === 'Jueves') {
    console.log('Estamos en clase');
} else {
    console.log('No estamos en clase');
}

var estamosClase = true;

if (estamosClase !== true) {
    console.log('Hola desde la clase');
} else {
    console.log('Hola fuera de clase');
}

var nombre = prompt('Diga su nombre');
console.log(nombre);