
function buscarUsuario(id, cuandoTermine) {
  setTimeout(() => {
    const usuario = {
      id: id,
      nombre: 'Ana',
    };

    cuandoTermine(usuario);
  }, 1000);
}

module.exports = { buscarUsuario };