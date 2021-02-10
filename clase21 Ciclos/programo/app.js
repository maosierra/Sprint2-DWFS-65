// Ciclo FOR:

console.log('Ciclo FOR:');
for(var i = 0; i < 10; i++) {
    console.log(i);
    if(i === 5) {
        console.log('Estoy en la mitad de los ciclos');
    }
}

// Ciclo do while:
var ciclos_do_while = 0;
do {
    console.log('hola desde do while', ciclos_do_while);
    ciclos_do_while++;
} while(ciclos_do_while < 10);

// ciclo WHILE:
var ciclo_while = 0;
while(ciclo_while < 5) {
    console.log('Hola desde ciclo while', ciclo_while);
    ciclo_while++;
}

// ciclo SWITCH:
var numero = 0;//prompt('Ingrese tipo motor');
var autonomia = 0;
switch(numero) {
    case '1.4':
        autonomia = calcular_autonomia(35);//15 * 35;
        break;
    case '1.6':
        autonomia = calcular_autonomia(20);//15 * 20;
        break;
    case '2.0':
        autonomia = calcular_autonomia(15);//15 * 15;
        break;
    default:
        //autonomia = parseInt(prompt('ingrese la autonomia'));
        break;
}
console.log(autonomia);

// FUNCIONES
function calcular_autonomia(kilometroXgalon){
    var autonomiaCalculada =  15 * kilometroXgalon;
    return autonomiaCalculada;
}

var nombreUsuario = prompt('Digite su nombre');
saludarUsuario(nombreUsuario);

// Esta funcion envia un alert con el nombre 
// nombre: parametro con el nombre del usuario a saludar
function saludarUsuario(nombre) {
    alert('Hola ' + nombre);
}

function sumar(valor1, valor2) {
    return valor1 + valor2;
}
