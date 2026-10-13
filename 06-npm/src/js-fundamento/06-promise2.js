
const getPokemonById = (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    fetch(url).then((response) => {
        (!response.ok) ? console.log(`Error: ${response.status}`) : null; // Verifica se a resposta da API foi bem-sucedida
        
        return response.json()
            .then((pokemon) => {
                console.log(pokemon.name);
                console.log(pokemon.abilities.map((ability) => ability.ability.name));
        });
    });
};


module.exports = getPokemonById;