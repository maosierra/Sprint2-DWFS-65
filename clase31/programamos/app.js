const URL_BASE = 'http://www.omdbapi.com/?apikey=7fb789f2&t=shrek 21212121';
// let imgCard = document.getElementById('imgCard');
// let tituloCard = document.getElementById('tituloCard');
// let parrafoCard = document.getElementById('parrafoCard');

// async function crearCard() {
//     const response = await fetch(URL_BASE);
//     const info = await response.json();
//     imgCard.src = info.Poster;
//     tituloCard.textContent = info.Title;
//     parrafoCard.textContent = info.Plot;
// }

// crearCard();

let card = document.getElementById('card');

async function crearContenidoCard() {
    try {
        const response = await fetch(URL_BASE);
        const info = await response.json();
        if (info.Poster) {
            card.innerHTML = `
            <img class="card-img-top" src="${info.Poster}" alt="Card image"
            style="width:100%">
            <div class="card-body">
                <h4 class="card-title">${info.Title}</h4>
                <p class="card-text">${info.Plot}</p>
            </div>
        `;
        } else {
            card.innerHTML = `
            <img class="card-img-top" src="https://th.bing.com/th/id/R721318367340e1b95888614ecdaa8b27?rik=bk2Eef59EOTgmw&riu=http%3a%2f%2fwww.riobeauty.co.uk%2fimages%2fproduct_image_not_found.gif&ehk=yDNA%2bnESRbMgwfYPM6KM2Wr2ROt4FydCxnRObBxaydM%3d&risl=&pid=ImgRaw" alt="Card image"
            style="width:100%">
            <div class="card-body">
                <h4 class="card-title">Pelicula no encontrada</h4>
                <p class="card-text">no se encontro esa pelicula</p>
            </div>
        `;
        }
    } catch (error) {
        console.log('error', error);
    }
}
crearContenidoCard();