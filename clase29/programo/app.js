// let promesa1 = new Promise((resolver, rechazar) => {
//     //Ejecutar tarea que toma muchisimo tiempo
//     setTimeout(() => {
//         resolver(mensajeTefy)
//     }, 1000);

//     setTimeout(() => {
//         rechazar({ mensaje: "promesa rechazada" })
//     }, 2000);
// });

// promesa1
//     .then((mensaje) => {
//         alert(mensaje);
//         console.log(mensaje);
//     })
//     .catch((mensaje) => {
//         alert(mensaje);
//     });

// let promesa2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('fallo');
//     }, 1000);
// });

// promesa2
//     .then((mensaje) => {
//         console.log(mensaje);
//     })
//     .catch(() => {
//         console.log('fallo');
//     });

// let ejecutarPromesa = async () => {
//     try {
//         let resultado = await promesa2;
//         console.log(resultado);
//     } catch (error) {
//         console.error(error);
//     }
// }

//ejecutarPromesa();

let imgCtn = document.getElementById('imgCtn');

function traerImagenPerro(url) {
    fetch(url)
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((json) => {
            console.log(json);
            imgCtn.src = json.message;
        })
        .catch((error) => {
            console.log(error);
        });
}

traerImagenPerro("https://dog.ceo/api/breeds/image/random")
