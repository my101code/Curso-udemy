
const getPokemonById = (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    fetch(url).then((response) => {
        if (!response.ok) {
            return console.log(`Error: ${response.status}`);
        }
        return response.json().then((pokemon) => {
            console.log(pokemon.name);
            console.log(pokemon.abilities.map((ability) => ability.ability.name));
        });
    });
};


module.exports = getPokemonById;