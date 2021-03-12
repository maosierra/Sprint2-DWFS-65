// const fetchPromise = fetch("http://jsonplaceholder.typicode.com/posts/42");

// fetchPromise
//     .then(response => {
//         console.log(response);
//         return response.json();
//     })
//     .then(json => console.log(json));

// let promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(25);
//     }, 1000);
// });

// promesa
//     .then(resultado => {
//         console.log('promesa 1', resultado);
//         return resultado * 2;
//     })
//     .then(resultado2 => {
//         console.log(resultado2);
//     })
//     .catch(erro => console.log(erro));

//Promise Race
// let promiseRace1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Promesa 1'), 1200);
// });
// let promiseRace2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Promesa 2'), 800);
// });
// let promiseRace3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Promesa 3'), 650);
// });
// let promiseRace4 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Promesa 4'), 1000);
// });

// Promise.race([promiseRace1, promiseRace2, promiseRace3, promiseRace4])
//     .then(respuesta => {
//         console.log(respuesta);
//     })
//     .catch(error => console.log('Error', error));

//Promise.all()
let promiseAll1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("hola mundo"), 800);
});
let promiseAll2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 650);
});
let promiseAll3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve({ nombre: "mauricio" }), 1000);
});

Promise.all([promiseAll1, promiseAll2, promiseAll3]).then(respuesta => {
    respuesta.map(r => console.log(r));
}).catch(error => {
    console.log(error);
})