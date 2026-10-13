
const getPokemonById = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    
    const response = await fetch(url);      // Espera a que la promesa se resuelva y obtiene la respuesta de la API
    const pokemon = await response.json();  // Espera a que la respuesta se convierta en JSON y obtiene los datos del Pokémon
    
    return pokemon.name;
};

module.exports = getPokemonById;    