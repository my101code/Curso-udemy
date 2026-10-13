
function prepararPizza(cuandoEsteLista) {
  console.log('Preparando la pizza...');

  setTimeout(() => {
    cuandoEsteLista();
  }, 2000);
}


function avisarCliente() {
  console.log('La pizza está lista');
}

module.exports = { prepararPizza, avisarCliente };