let gifMasVistos = document.getElementById('gifMasVistos');
let buscarGif = document.getElementById('buscarGif');

const url_base_trending = 'https://api.giphy.com/v1/gifs/trending?api_key=XMxhHwKl7vxxotFk5I9kn8rVJwA6qtP7';
const url_base_search = 'https://api.giphy.com/v1/gifs/search?api_key=XMxhHwKl7vxxotFk5I9kn8rVJwA6qtP7&q=';

let mostrarTrending = async () => {
    try {
        let resultado = await fetch(url_base_trending);
        let json = await resultado.json();
        json.data.forEach(trending => {
            gifMasVistos.innerHTML += `
            <img src="${trending.images.fixed_height.url}">
            <br>
            <li>${trending.title}</li>
            <br><br>
            `;
        });
    } catch (error) {
        console.log(error);
    }
}

//mostrarTrending();

buscarGif.addEventListener('keypress', async (e) => {
    if (e.key === 'Enter') {
        gifMasVistos.innerHTML = '';
        let result = await fetch(url_base_search + e.target.value);
        let json = await result.json();
        json.data.forEach(trending => {
            gifMasVistos.innerHTML += `
            <div>
                <img src="${trending.images.fixed_height.url}">
                <br>
                <li>${trending.title}</li>
                <br><br>
            </div>
            `;
        });
    }
});