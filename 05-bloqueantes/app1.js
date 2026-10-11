

console.log('Inicio');

setTimeout(() => {
  console.log('Temporizador');
}, 0);

Promise.resolve().then(() => {
  console.log('Promesa');
});

console.log('Final');




// Resultado
/*
Inicio
Final
Promesa
Temporizador
 */