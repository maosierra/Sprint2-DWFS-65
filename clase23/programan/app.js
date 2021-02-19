class Perro {
    constructor(nombre, raza, tamanio, peso, edad, color, estado){
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