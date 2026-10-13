
const getPokemonById = require('./js-fundamento/06-promise3');

getPokemonById(20)
    .then((pokemon) => console.log({pokemon})) //devuelve el nombre del pokemon
    .finally(() => console.log('Finalizó la ejecución de la promesa')); //se ejecuta al final de la promesa, sin importar si se resolvió o se rechazó