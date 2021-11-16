let personajes = [];

let personajesLS = JSON.parse( localStorage.getItem('personajes') );
if(personajesLS !== null) {
    personajes = JSON.parse( localStorage.getItem('personajes') );
}

class Crear {
    constructor (nombre, clase, raza, elemento) {
        this.nombre = nombre;
        this.clase = clase;
        this.raza = raza;
        this.elemento = elemento;
        this.victorias = 0;
        this.derrotas = 0;
    }
}

let nombre;
let clase;
let raza;
let elemento;