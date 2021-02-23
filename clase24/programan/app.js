let nombre = prompt('ingrese nombre de usuario');
let contrasena = prompt('ingrese contraseña');

let usuarios = [
    {
        Nombre: "Nombre1",
        Apellido: "Apellido1",
        Email: "email1@c.com",
        Usuario: "Usuario1",
        Contrasena: "Contrasena1",
        Activo: true
    },
    {
        Nombre: "Nombre2",
        Apellido: "Apellido2",
        Email: "email2@c.com",
        Usuario: "Usuario2",
        Contrasena: "Contrasena2",
        Activo: true
    },
    {
        Nombre: "Nombre3",
        Apellido: "Apellido3",
        Email: "email3@c.com",
        Usuario: "Usuario3",
        Contrasena: "Contrasena3",
        Activo: true
    }
];

let almacenarUsuario = (nombre, contrasena) => {

    let resultado = usuarios.find((usuario) => {
        if(usuario.Nombre === nombre && usuario.Contrasena === contrasena) {
            return true;
        } else {
            return false;
        }
    });

    if(resultado === undefined) {
        console.log('Bienvenido ' + nombre);
        usuarios.push(
            {
                Nombre: nombre,
                Apellido: prompt('diga apellido'),
                Email: prompt('diga email'),
                Usuario: nombre,
                Contrasena: contrasena,
                Activo: true
            }
        );
    } else {
        throw new Error('El usuario esta en uso');
    }
}

try {

    almacenarUsuario(nombre, contrasena);
    
} catch (error) {
    console.log(error);
}
console.log(usuarios);
