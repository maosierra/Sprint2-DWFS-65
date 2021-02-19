class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    nombreCompleto() {
        return this.nombre + " " + this.apellido;
    }

    esMayorEdad() {
        if (this.edad > 18) {
            return true
        } else {
            return false;
        }
    }
}

let persona1 = new Persona('Nombre1', 'Apellido1', 20);
console.log(persona1);
console.log(persona1.nombreCompleto() + " - " + persona1.esMayorEdad());