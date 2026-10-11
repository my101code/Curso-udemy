
const fs = require("fs");

const archivo = "archivo.txt";

fs.writeFile(archivo, "Hola mundo", (err) => {
    if (err) { //
        console.error("Error al escribir en el archivo:", err);
    } else {
        console.log("Archivo escrito correctamente.");
    }
});

