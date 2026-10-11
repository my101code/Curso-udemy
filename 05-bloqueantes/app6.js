

function mostrarUsuario() {
  buscarUsuario(7)
    .then((usuario) => {
      console.log(usuario.nombre);
    })
    .catch((error) => {
      console.log(error.message);
    });
}

// Resultado
/*
Usuario 7
*/


/***************************************************************************** */

async function mostrarUsuario() {
  try {
    const usuario = await buscarUsuario(7);
    console.log(usuario.nombre);
  } catch (error) {
    console.log(error.message);
  }
}

// Resultado
/*
Usuario 7
*/

/***************************************************************************** */


async function hacerPedido() {
  try {
    const resultado = await prepararPizza();
    console.log(resultado);
  } catch (error) {
    console.log('Ha ocurrido un error:');
    console.log(error.message);
  }
}

// Resultado
/*
Preparando la pizza...
Pizza preparada
*/

/****************************************************************************** */

function buscarUsuario(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: id,
        nombre: 'Ana',
      });
    }, 1000);
  });
}

function buscarPedidos(usuarioId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 101, producto: 'Teclado', usuarioId },
        { id: 102, producto: 'Ratón', usuarioId },
      ]);
    }, 1000);
  });
}

async function mostrarPedidos() {
  try {
    console.log('Buscando usuario...');

    const usuario = await buscarUsuario(7);

    console.log(`Usuario encontrado: ${usuario.nombre}`);
    console.log('Buscando sus pedidos...');

    const pedidos = await buscarPedidos(usuario.id);

    console.log(pedidos);
  } catch (error) {
    console.log('Error:', error.message);
  }
}

mostrarPedidos();

console.log('El resto de Node continúa funcionando');

// Resultado
/*
Buscando usuario...
Usuario encontrado: Ana
Buscando sus pedidos...
[ { id: 101, producto: 'Teclado', usuarioId: 7 },
  { id: 102, producto: 'Ratón', usuarioId: 7 } ]
El resto de Node continúa funcionando
*/


/************************************************************** */

// setTimeout recibe un callback.
function cocinar() {
  // cocinar devuelve una Promise.
  return new Promise((resolve) => {
    setTimeout(() => {
      // resolve completa la Promise.
      resolve('Comida preparada');
    }, 1000);
  });
}

// async permite utilizar await.
async function comer() {
  // await obtiene el resultado de la Promise.
  const comida = await cocinar();

  console.log(comida);
}

comer();

// Resultado
/*
Comida preparada
*/