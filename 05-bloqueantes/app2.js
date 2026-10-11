
async function obtenerUsuario() {
  console.log('Buscando usuario');

  const usuario = await buscarEnBaseDeDatos();

  console.log(usuario);
}

/*
Inicia la operación.
Pausa solamente esa función.
Puede continuar atendiendo otras tareas.
Cuando llega el resultado, continúa después del await.
*/

