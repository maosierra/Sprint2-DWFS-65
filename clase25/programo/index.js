let parrafoConId = document.getElementById('parrafoConId');
parrafoConId.style.textTransform = 'capitalize';

let parrafoConClase = document.getElementsByClassName('parrafoConClase');
for (let i = 0; i < parrafoConClase.length; i++) {
    let parrafo = parrafoConClase[i];
    parrafo.style.textDecoration = 'underline';
}

let parrafosTag = document.getElementsByTagName('p');
for (let i = 0; i < parrafosTag.length; i++) {
    let parrafo = parrafosTag[i];
    parrafo.style.color = '#ff44ff';
}

let parrafoSpan = document.querySelector('p #parrafoSpan');
parrafoSpan.style.color = 'black';

let barcoImg = document.getElementById('barcoImg');
barcoImg.className += ' tefy';

barcoImg.classList.add('claseDesdeMetodo');
barcoImg.classList.remove('gray');

let idViejo = document.getElementById('idViejo');
idViejo.id = 'idNuevo';

let valorEntrada = document.getElementById('valorEntrada');
valorEntrada.value = 'Hola desde JS';

let listaElementos = document.getElementById('listaElementos');


let agregarTexto = document.getElementById('agregarTexto');
//agregarTexto.outerHTML += '<h4>Titulo h4</h4>';

agregarTexto.innerHTML = 'TITULO H3 modificado desde JS';

let animacion = document.getElementById('animacion');
animacion.animate([
    { transform: 'translatex(0px)' },
    { transform: 'translatex(300px)' },
    { transform: 'translatex(0px)' }
], {
    duration: 5000,
    iterations: Infinity
});

let parrafoCreado = document.createElement('p');
parrafoCreado.textContent = 'Lorem lorem lorem';

let contenedorParrafor = document.getElementById('contenedorParrafor');
contenedorParrafor.appendChild(parrafoCreado);
console.log(parrafoCreado);

// Local storage
// localStorage.setItem('nombre', 'Mauricio');
// localStorage.setItem('nombreCompleto', 'Mauricio Sierra');

console.log(localStorage.getItem('nombreCompleto'));

sessionStorage.setItem('nombreStorage', 'Mauricio');
console.log(sessionStorage.getItem('nombreStorage'));
