import { Autor } from "./Autor.class";
import { Libro } from "./Libro.class";
import { Libreria } from "./Libreria.class";

// Crear instancias de Autor
const autor1 = new Autor("Gabriel Garcia Marquez", "Colombiano");

// Crear instancias de Libro y asignar un autor
const libro1 = new Libro("Cien años de soledad", autor1, 20, "Ficción", 10);

// Crear instancia de Libreria y agregar libros
const libreria = new Libreria();
libreria.agregarLibro(libro1);

// Realizar algunas operaciones
console.log(libro1.toString());  // Mostrar información del libro
console.log(libreria.buscarPorISBN(libro1.getISBN()));  // Buscar libro por ISBN
console.log(libreria.getGanancias());  // Obtener ganancias de la librería

// Intentar comprar un libro
const totalCompra = libreria.comprarLibros([libro1.getISBN()]);
console.log(`Total de la compra: $${totalCompra}`);
console.log(`Ganancias de la librería: $${libreria.getGanancias()}`);

// Intentar eliminar un libro
console.log(libreria.eliminarLibro(libro1.getISBN()));
