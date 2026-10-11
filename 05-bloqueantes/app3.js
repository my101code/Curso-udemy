

function esperar() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
}

async function ejecutar() {
  console.log('A');
  await esperar();
  console.log('B');
}

ejecutar();
console.log('C');

// Resultado
/*
A
C
B
*/