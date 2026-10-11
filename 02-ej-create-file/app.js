
const fs = require("fs");

const archivo = "archivo.txt";

const data = fs.readFileSync(archivo, "utf8");

const newData = data.replace(/mundo/g, "Node.js");

fs.writeFileSync("archivo-modificado.txt", newData);
