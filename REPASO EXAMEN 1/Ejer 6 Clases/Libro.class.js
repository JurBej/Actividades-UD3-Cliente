import { Libreria } from "./Libreria.class";
import { Autor } from "./Autor.class";
/**
 * Representa un libro
 * @class
 * @param {string} titulo - El título del libro
 * @param {string} autor - El autor del libro
 * @param {number} precio - El precio del libro
 * @param {string} genero - El género del libro
 * @param {number} stock - El stock del libro
 */
export class Libro {
    
    constructor(titulo, autor, precio, genero, stock) {
        this.ISBN = undefined; //   ISBN del Libro
        this.titulo = titulo;   //  titulo del Libro
        this.autor = autor;     //  autor del Libro
        this.precio = precio;   // precio del Libro
        this.genero = genero;   // genero del Libro
        this.stock = stock;     // stock del Libro
    }

    /**
     * Retorna un string que representa al libro
     * @returns {string} - String que representa al libro
    */
    toString(){
        return 'El libro: ' + this.titulo + 'del escritor '+ this.autor +' con un ISBN ' + this.ISBN + ''
    }
    /**
     * Asigna un nuevo ISBN al libro
     * @param {number} ISBN - El nuevo IBN del libro
    */
    asignarISBN(ISBN) {
        this.ISBN = ISBN;
    }

    /**
     * Retorna si el libro tiene stock
     * @returns {boolean} - Verdadero si tiene stock, falso de lo contrario
     */
    tieneStock() {
        return this.stock > 0;
    }

    /**
     * Obtiene el ISBN del libro
     * @returns {number} - El ISBN del libro
    */
    getISBN(){
        return this.ISBN;
    }

    /**
     * Obtiene el título del libro
     * @returns {string} - El título del libro
    */
    getTitutlo(){
        return this.titulo;
    }

    /**
     * Obtiene el autor del libro
     * @returns {string} - El autor del libro
    */
    getAutor(){
        return this.autor.getNombre();
    }
    /**
     * Obtiene el precio del libro
     * @returns {number} - El precio del libro
    */
    getPrecio(){
        if(precio > 0){
        return this.precio;
        }else{
            throw console.error('El precio deber ser minimo 0.');
        }
    }

    /**
     * Obtiene el género del libro
     * @returns {string} - El género del libro
    */
    getGenero(){
        return this.genero;
    }

    /**
     * Asigna un nuevo stock al libro
     * @param {number} stock - El nuevo stock del libro
    */
    setStock(stock){
        if(stock > 0){
        this.stock = stock;
        }else{
            throw console.error('El stock debe ser minimo 0.');
        }
    }
}

