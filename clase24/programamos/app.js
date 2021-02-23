let nombre = prompt('ingrese nombre de usuario');

let usuarios = ['Nombre1', 'Nombre2', 'Nombre3'];

let almacenarUsuario = (nombre) => {

    let resultado = usuarios.find((usuario) => {
        return usuario === nombre;
    });

    if(resultado === undefined) {
        console.log('Bienvenido ' + nombre);
        usuarios.push(nombre);
    } else {
        throw new Error('El usuario esta en uso');
    }
}

try {

    almacenarUsuario(nombre);
    
} catch (error) {
    console.log(error);
}
console.log(usuarios);
