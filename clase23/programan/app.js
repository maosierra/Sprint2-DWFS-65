class Perro {
    constructor(nombre, raza, tamanio, peso, edad, color, estado) {
        this.nombre = nombre;
        this.raza = raza;
        this.tamanio = tamanio;
        this.peso = peso;
        this.edad = edad;
        this.color = color;
        this.estado = estado;
    }

    modificarEstadoAdopcion(nuevoEstado) {
        this.estado = nuevoEstado;
    }

    obtenerEstadoAdoption() {
        return this.estado;
    }
}

let rocki = new Perro('rockie', 'callejero', 'grande', '30kg', 3, 'Marrones', 'En Adopcion');
rocki.modificarEstadoAdopcion('Adoptado');
console.log(rocki.obtenerEstadoAdoption());


let lista_perros = [];

do {
    let nombre = prompt('digite el nombre del perro');
    let raza = prompt('digite la raza');
    let tamanio = prompt('digite tamaño');
    let peso = prompt('digite peso');
    let edad = parseInt(prompt('digite edad'));
    let color = prompt('digite color');
    let estado = prompt('Estado del perro');

    let perro = new Perro(nombre, raza, tamanio, peso, edad, color, estado);

    lista_perros.push(perro);
} while (window.confirm('Desea continuar'));

console.log(lista_perros);

for (let index = 0; index < lista_perros.length; index++) {
    const perro = lista_perros[index];
    if(perro.obtenerEstadoAdoption() === 'Adoptado'){
        console.log(perro);
    }
}

for (let index = 0; index < lista_perros.length; index++) {
    const perro = lista_perros[index];
    if(perro.obtenerEstadoAdoption() === 'En adopcion'){
        console.log(perro);
    }
}
