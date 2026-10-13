
const { buscarUsuario } = require('./js-fundamento/03-callbacks3-con-datos.js');

buscarUsuario(8, (usuario) => {
  console.log(usuario.nombre);
});
