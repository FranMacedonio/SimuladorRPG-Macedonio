let personajes = [];

let personajesLS = JSON.parse( localStorage.getItem('personajes') );
if(personajesLS !== null) {
    personajes = JSON.parse( localStorage.getItem('personajes') );
}

class Crear {
    constructor (nombre, clase, raza, elemento, caracter, historia, hobby) {
        this.nombre = nombre;
        this.clase = clase;
        this.raza = raza;
        this.elemento = elemento;
        this.caracter = caracter;
        this.historia = historia;
        this.hobby = hobby;
        this.victorias = 0;
        this.derrotas = 0;
    }
}

let nombre;
let clase;
let raza;
let elemento;
let caracter;
let historia;
let hobby;
let jugar;