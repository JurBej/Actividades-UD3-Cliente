import { Libreria } from "./Libreria.class";
import { Libro } from "./Libro.class";
export class Autor {
    constructor (nombre, nacionalidad) {
        this.nombre = nombre;
        this.nacionalidad = nacionalidad;
    }

    getNombre() {
        return this.nombre;
    }

    getNacionalidad() {
        return this.nacionalidad;
    }

    toString() {
        return "Nombre del autor: "+this.nombre+", nacionalidad: "+this.nacionalidad;
    }
}