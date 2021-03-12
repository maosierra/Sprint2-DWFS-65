let pokemonCtn = document.getElementById('pokemonCtn');

const URL_BASE = "https://pokeapi.co/api/v2/pokemon/";

let numeros = new Array('66', '46', '72');
let pokemon66 = fetch(URL_BASE + numeros[0]).then(respuesta => respuesta.json());
let pokemon46 = fetch(URL_BASE + numeros[1]).then(respuesta => respuesta.json());
let pokemon72 = fetch(URL_BASE + numeros[2]).then(respuesta => respuesta.json());

Promise.all([pokemon66, pokemon46, pokemon72])
    .then(respuesta => {
        for (let index = 0; index < respuesta.length; index++) {
            const pokemon = respuesta[index];
            pokemornCtn.innerHTML += `
                <div class="cuadros">
                    <h2>${pokemon.forms[0].name} #${numeros[index]}</h2>
                    <img src="${pokemon.sprites.other.dream_world.front_default}">
                </div>
        `;
        }
    })
    .catch(error => console.log(error));
