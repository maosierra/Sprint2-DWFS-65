let nombreCompleto = prompt('Ingrese Nombre completo');
let colorFondo = prompt('Ingrese color fondo');
let colorFuente = prompt('Ingrese color fuente');
let tamanioFuente = prompt('Ingrese tamaño fuente en px');

let contenedor = document.getElementById('contenedor');

let parrafo = document.createElement('p');
parrafo.textContent = 'Hola, soy ' + nombreCompleto;
parrafo.style.backgroundColor = colorFondo;
parrafo.style.color = colorFuente;
parrafo.style.fontSize = tamanioFuente + 'px';
parrafo.style.textAlign = 'center';

contenedor.appendChild(parrafo);