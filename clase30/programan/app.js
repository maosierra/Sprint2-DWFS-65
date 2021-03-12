const numeros = [54, 68, 99, 5, 666, 14, 69, 77, 100, 888];
const URL_BASE = "https://pokeapi.co/api/v2/pokemon/";
let pokemonCtn = document.getElementById('pokemonCtn');


let indexRandom = parseInt(Math.random() * numeros.length);
let pocke1 = fetch(URL_BASE + numeros[indexRandom]).then(respuesta => respuesta.json());

inexRandom = parseInt(Math.random() * numeros.length);
let pocke2 = fetch(URL_BASE + numeros[indexRandom]).then(respuesta => respuesta.json());

inexRandom = parseInt(Math.random() * numeros.length);
let pocke3 = fetch(URL_BASE + numeros[indexRandom]).then(respuesta => respuesta.json());



Promise.race([pocke1, pocke2, pocke3])
    .then((respuesta) => {
        pokemonCtn.innerHTML += `
            <div>
                <h2>${respuesta.forms[0].name}</h2>
                <img src="${respuesta.sprites.other.dream_world.front_default}">
            </div>
        `;
    })
    .catch(error => console.log(error));







