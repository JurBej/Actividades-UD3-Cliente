const paises = [
    "Uruguay",
    "México",
    "Canadá",
    "Kenia",
    "Japón",
    "Honduras",
    "Grecia",
    "Noruega",
    "India",
    "Francia",
    "Argentina",
    "Turquía",
    "Suecia",
    "Brasil",
    "Dinamarca",
    "Zambia",
    "Rusia",
    "Vietnam",
    "Qatar",
    "Egipto",
    "Perú"
  ];

const numeroElementos = (array) => {
    return array.length;
}

const mostrarTodos = (array) => {
    let result = "";
    array.forEach(element => {
        result+= element + "\n";
    });

    return result;
}

const muestraTodosInverso = (array) => {
    let arrayInverso = array.slice().reverse();
    result ="";
    arrayInverso.forEach(element => {
        result+= element + "\n";
    });

    return result;
}

const muestraOrdenados = (array) => {
    let arrayOrdenado = array.slice().sort((element1, element2) => element1.localeCompare(element2));
    return arrayOrdenado;
}

const anadirElementoPrincipio = (array, elemento) => {
    array.unshift(elemento);
    return "Añadido con éxtio";
}

const anadirElementoFinal = (array, elemento) => {
    array.push(elemento);
    return "Añadido con éxtio";
}

const borrarDelPrincipio = (array) => {
    let borrado = array.shift();
    return borrado;
}

const borrarDelFinal = (array) => {
    let borrado = array.pop();
    return borrado;
}

const mostrarElementoPorPosicion = (array, posicion) => {
    return array[posicion];
}

const muestraPosicion = (array, elemento) => {
    return array.indexOf(elemento);
}

const muestraPorIntervalo = (array, min, max) => {
    result = "";
    for (let index = min; index <= max; index++) {
        result+= array[index] + "\n";
    }

    return result;
}

let respuestaPrompt = parseInt(prompt("Introduce una opción del 1 al 6 \n"+
"1. Mostrar número de países\n"+
"2. Mostrar listado de países\n"+
"3. Mostrar un intervalo de países\n"+
"4. Añadir un país\n"+
"5. Borrar un país\n"+
"6. Consultar un país"));

switch (respuestaPrompt) {
    case 1:
        document.write(numeroElementos(paises));
        break;
    case 2:
        let promptListado = prompt("Elige una opcion del 1 al 3\n1. En orden\n2. Del revés\n3. Orden alfabético");
        if (promptListado == 1) {
            document.write(mostrarTodos(paises));
        } else if (promptListado == 2) {
            document.write(muestraTodosInverso(paises));
        } else if (promptListado == 3) {
            document.write(muestraOrdenados(paises));
        } else {
            alert("Debe introducir una opción correcta");
        }
        break;
    case 3:
        let promptIntervalo = prompt("Introduce un intervalo con este formato. Ejemplo: 3-5");
        let intervalo = promptIntervalo.split("-");
        document.write(muestraPorIntervalo(paises, intervalo[0], intervalo[1]));
        break;
    case 4:
        let promptInsertar = prompt("Elige una opción del 1 al 2\n1. Al principio\n2. Al final");
        let promptPais = prompt("Introduce el país");
        if (promptInsertar == 1) {
            document.write(anadirElementoPrincipio(paises, promptPais));
        } else if (promptInsertar == 2) {
            document.write(anadirElementoFinal(paises, promptPais));
        } else {
            alert("Debe introducir una opción válida");
        }
        break;
    case 5:
        let promptBorrar = prompt("Elige una opción del 1 al 2\n1. Al principio\n2. Al final");
        if (promptBorrar == 1) {
            document.write(borrarDelPrincipio(paises));
        } else if (promptBorrar == 2) {
            document.write(borrarDelFinal(paises));
        } else {
            alert("Introduce una opción válida");
        }
        break;
    case 6:
        let promptConsultar = prompt("Elige una opción 1 al 2\n1. Por posición\n2. Por nombre");
        if (promptConsultar == 1) {
            let promptPosicion = prompt("Introduce la posición");
            document.write(mostrarElementoPorPosicion(paises, promptPosicion));
        } else if (promptConsultar == 2) {
            let promptNombre = prompt("Introduce el nombre");
            document.write(muestraPosicion(paises, promptNombre));
        }
        break;

    default:
        alert("Introduce una opción válida");
        break;
}