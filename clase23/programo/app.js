let anioActual = 2030;

let carro = {
    marca: "Mazda",
    modelo: "cx5",
    anio: 2020,
    color: "Gris",
    edad: function() {
        return anioActual - this.anio;
    }
};

console.log(carro);
console.log('Resultado del metodo edad: ' + carro.edad());

// Nueva propiedad
carro.combustible = 'nafta';
console.log(carro);

// una sola propiedad
console.log(carro.modelo);

// agregar metodo
carro.titulo_publicacion = function() {
    return `${this.marca} - ${this.modelo} - ${this.anio}.`;
}

console.log(carro.titulo_publicacion());

// Funcion para crear objetos similares
function Usuario(nombreUsuario, nombre, apellido, email, contrasena){
    this.nombreUsuario = nombreUsuario;
    this.nombre = nombre;
    this.apellido = apellido;
    this.correoElectronico = email;
    this.contrasena = contrasena;
}

let usuario1 = new Usuario('mauricios', 'Mauricio', 'Sierra', 'e@e.com', 'admin123');
console.log(usuario1);

let usuario2 = new Usuario('michaelj', 'Michael', 'Jordan', 'm@j.com', 'mm123');
console.log(usuario2);

//let usuario3 = new Usuario(prompt('diga su usuario'), prompt('diga su nombre'), prompt('diga su apellido'), prompt('diga su correo'), prompt('diga su contrasena'));
// console.log(usuario3);

// clases
class Ropa {
    constructor(marca, tipo, talle, color, precio, cantidad) {
        this.marca = marca;
        this.tipo = tipo;
        this.talla = talle;
        this.color = color;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    obtenerInfomacionVenta() {
        return `${this.tipo} - ${this.talla} - ${this.precio}`;
    }

    obtenerTalla() {
        return this.talla;
    }
}

let camiseta = new Ropa('Lacoste', 'camiseta', 's,m,l,xl', 'azul', 'U$50', 10);
let jean = new Ropa('Levis', 'jean', '6,8,10,30,32,34,36', 'azul', 'u$60', 20);

console.log(camiseta);
console.log(jean);
console.log(camiseta.obtenerInfomacionVenta());
console.log(jean.obtenerInfomacionVenta());