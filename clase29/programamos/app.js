let imgCtn = document.getElementById('imgCtn');
let nombreUsuario = document.getElementById('nombreUsuario');
let listaSeguidores = document.getElementById('listaSeguidores');

function traerInformacionUsuario(nombreUsuario) {
    fetch('https://api.github.com/users/' + nombreUsuario)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            imgCtn.src = json.avatar_url;
            mostrarSeguidores(json.followers_url);
        })
        .catch((error) => {
            console.log(error);
        });
}

function mostrarSeguidores(urlSeguidores) {
    fetch(urlSeguidores)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            for (let index = 0; index < json.length; index++) {
                const usuario = json[index];
                listaSeguidores.innerHTML += `
                <li>${usuario.login}</li>
                `;
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

nombreUsuario.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        traerInformacionUsuario(nombreUsuario.value);
    }
});