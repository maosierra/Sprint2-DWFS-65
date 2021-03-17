let cntGif = document.getElementById('cntGif');

let inputGif = document.getElementById('inputGif');
let buscarGif = document.getElementById('buscarGif');
let btnVerMas = document.getElementById('btnVerMas');

const url_base_trending = 'https://api.giphy.com/v1/gifs/trending?api_key=XMxhHwKl7vxxotFk5I9kn8rVJwA6qtP7&limit=5';
const url_base_search = 'https://api.giphy.com/v1/gifs/search?api_key=XMxhHwKl7vxxotFk5I9kn8rVJwA6qtP7&limit=5&offset=';

let offset = 0;

async function traerTrending() {
    const response = await fetch(url_base_trending);
    const info = await response.json();
    info.data.forEach(data => {
        cntGif.innerHTML += `
            <img src="${data.images.fixed_height.url}" />
        `;
    });
}

//traerTrending();

async function traerBusqueda(palabra, inicio) {
    const url = url_base_search + inicio + '&q=' + palabra;
    const response = await fetch(url);
    const info = await response.json();
    info.data.forEach(data => {
        cntGif.innerHTML += `
            <img src="${data.images.fixed_height.url}" />
        `;
    });
}

buscarGif.addEventListener('click', () => {
    offset = 0;
    cntGif.innerHTML = '';
    traerBusqueda(inputGif.value, offset);
});

btnVerMas.addEventListener('click', () => {
    offset += 5;
    traerBusqueda(inputGif.value, offset);
})

