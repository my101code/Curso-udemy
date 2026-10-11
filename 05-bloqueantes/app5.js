function esperarDosSegundos() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Espera terminada');
    }, 2000);
  });
}

async function ejecutar() {
  console.log('Paso 1');

  const resultado = await esperarDosSegundos();

  console.log('Paso 2');
  console.log(resultado);
}

ejecutar();

console.log('Node puede continuar');

// Resultado
/*
Paso 1
Node puede continuar
Paso 2
Espera terminada
*/

// ¿Qué ocurrió?
/*
Se muestra Paso 1.
ejecutar() llega al await y queda pausada.
El resto del programa puede continuar.
Se muestra Node puede continuar.
Dos segundos después, la promesa termina.
ejecutar() continúa después del await.
*/