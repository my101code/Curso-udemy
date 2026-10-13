
const getPokemonById = (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    
    return fetch(url)
        .then( (response) => response.json()) //devuelve una promesa que se resuelve con el objeto JSON
        .then( (pokemon) => pokemon.name //devuelve el nombre del pokemon
        );
};

module.exports = getPokemonById;    