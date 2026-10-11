
const fs = require("fs");

const archivo = "archivo.txt";

const data = fs.readFileSync(archivo, "utf8");

// Dividir el contenido del archivo en palabras utilizando una expresión regular que coincida con cualquier espacio en blanco. 
// devuelve un array de palabras.
const palabras = data.split(/\s+/);

console.log(palabras);


// Contar el número de palabras en el archivo
console.log(`El archivo "${archivo}" contiene ${palabras.length} palabras.`);


// contar las palabras que contienes la palabra "mundo"
// Filtrar las palabras que contienen "mundo" y contar cuántas hay (Diferecia entre menusculas y mayusculas)
const palabrasConMundo = palabras.filter((palabra) => palabra.includes("mundo"));
console.log(`El archivo "${archivo}" contiene ${palabrasConMundo.length} palabras que incluyen "mundo".`);


const result = palabras.filter((palabra) => palabra.length > 6);
console.log(`El archivo "${archivo}" contiene ${result.length} palabras con más de 6 caracteres.`);


const textoMayusculas = "ALFABETO";
console.log('El texto en minúsculas es: ' + textoMayusculas.toLowerCase()); // Convierte a minúsculas

// usando el método match()
const coincidencias = data.match(/mundo/g) || []; // busca todas las coincidencias de la palabra "mundo" en el texto y devuelve un array con ellas. Si no hay coincidencias, devuelve un array vacío.
console.log('Coincidencias encontradas: ' + coincidencias.length);