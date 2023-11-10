import { Libro } from "./Libro.class";
import { Autor } from "./Autor.class";

export class Libreria {
    constructor() {
        this.libros = [];
        this.ganancias = 0;
    }

    getGanancias() {
        return this.ganancias;
    }

    agregarLibro(libro) {
        let aleatorioISBN = this.generaISBN();
        libro.asignarISBN(aleatorioISBN);
        if (this.libros.includes(libro.getISBN())) {
            do {
                aleatorioISBN = this.generaISBN();
                libro.asignarISBN(aleatorioISBN);
            } while (this.libros.includes(libro.getISBN()));
            this.libros.push(libro);
            return "Agregado con éxito";
        } else {
            this.libros.push(libro);
            return "Agregado con éxito";
        }
    }

    eliminarLibro(ISBN) {
        const index = this.libros.findIndex(libro => libro.ISBN == ISBN);
        if (index != -1) {
            this.libros.splice(index, 1);
            return "Eliminado con éxito";
        } else {
            return "El libro no existe";
        }
    }

    buscarPorISBN(ISBN) {
        const index = this.libros.findIndex(libro => libro.ISBN == ISBN);
        if (index != -1) {
            return this.libros[index].toString();
        } else {
            return "El libro no existe";
        }
    }

    buscarPorTitulo(titulo) {
        const index = this.libros.findIndex(libro => libro.titulo == titulo);
        if (index != -1) {
            return this.libros[index].toString();
        } else {
            return "El libro no existe";
        }
    }

    filtrarPorAutor(autor) {
        let librosFiltro = this.libros.filter(libro => libro.autor == autor);
        if (librosFiltro.length>0) {
            return librosFiltro;
        } else {
            return "No existen libros con dicho autor";
        }
    }

    filtrarPorGenero(genero) {
        let librosFiltro = this.libros.filter(libro => libro.genero == genero);
        if (librosFiltro.length>0) {
            return librosFiltro;
        } else {
            return "No existen libros con dicho genero";
        }
    }

    comprarLibros(ISBNLibros) {
        let totalCompra = 0;
    
        ISBNLibros.forEach(ISBN => {
          const libro = this.libros.find(libro => libro.ISBN === ISBN);
          if (libro && libro.stock > 0) {
            libro.stock--;
            totalCompra += libro.precio;
          }
        });
    
        this.ganancias += totalCompra;
        return totalCompra;
      }

    generaISBN() {
        let aleatorio = Math.floor(Math.random() * 10000000000000) + 1;
        let numeroFormateado = aleatorio.toString().padStart(13, '0');
        return numeroFormateado;
    }
}