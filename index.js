//Ejercicio 2
// Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:

// - Tu nombre (string)

// - Tu edad (number)

// - ¿Eres desarrollador? (boolean)

// - Tu fecha de nacimiento (Date)

// - Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)

const nombre= "Mario Sepulveda Allende";
const edad= 22;
const desarrollador= true;
const fecha_nacimiento= new Date(2000, 5, 1);

const libro= {
    "titulo": "Cronica de una muerte anunciada",
    "autor": "Gabriel Garcia Marquez",
    "fecha": 1981,
    "url": "http://www.juansanmartin.net/biblioteca/gabriel/cronicadeunamuerte.pdf"
}
const listaDatos= [nombre, edad, desarrollador, fecha_nacimiento, libro];
console.log(listaDatos);