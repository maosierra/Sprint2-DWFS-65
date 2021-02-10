// var numeroUno = parseInt(prompt("Ingrese un numero "));
// console.log("Numero Ingresado: " + numeroUno);
// var numeroDos = parseInt(prompt("Ingrese otro numero "));
// console.log("Segundo Numero Ingresado: " + numeroDos);

// alert(numeroUno + numeroDos);

//alert(parseInt(numeroUno) + parseInt(numeroDos));

// ¿Carro llega?
var rendimiento = 15;
var capacidad = 45;

var kilometros = parseInt(prompt("Ingrese los kilometros a recorrer"));

var autonomia = rendimiento * capacidad;

if (kilometros <= autonomia) {
    alert("llega a destino perfecto");
} else {
    alert("No llega ni a palos");
}