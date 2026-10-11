function prepararPizza() {
  return new Promise((resolve, reject) => {
    console.log('Preparando la pizza...');

    setTimeout(() => {
      const todoSalioBien = true;

      if (todoSalioBien) {
        resolve('Pizza preparada');
      } else {
        reject(new Error('No quedan ingredientes'));
      }
    }, 2000);
  });
}

// resultado
/*
Preparando la pizza...
Pizza preparada
*/