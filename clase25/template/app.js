// Agregar menu navegacion adicional
let listaMenu = document.getElementById('listaMenu');
let menuNuevo = document.createElement('li');
menuNuevo.textContent = 'Item 5';
listaMenu.appendChild(menuNuevo);

// Agregar negrita
let palabraNegrita = document.getElementById('palabraNegrita');
palabraNegrita.style.fontWeight = 'bold';

// Cambiar imagen cada x segundos
let imgCambio = document.getElementById('imgCambio');
let url_1 = 'https://picsum.photos/id/598/600/400';
let url_2 = 'https://picsum.photos/id/599/600/400';
setInterval(()=> {
    if(imgCambio.src === url_1){
        imgCambio.src = url_2;
    } else {
        imgCambio.src = url_1;
    }
}, 1000);

// Invertir el orden imagenes
let ctnImgenes = document.querySelector('.imagenes');
ctnImgenes.style.flexDirection = 'row-reverse';