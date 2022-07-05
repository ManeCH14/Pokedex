const loadPokemon = async () => {
    const min = 1;
    const max = 898;
    const randomPokemon = Math.floor(Math.random() * (max - min) + min);
    const shiny = Math.floor(Math.random() * (10 - 1) + 1) === 1;

    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonAlazar)
        const data = await response.json();
        let pokemonSprite = '';
        if (shiny) {
            console.log('Te salio un shiny');
            pokemonSprite += `<img class= "imagen" src="${data.sprites.front_shiny}">`
        } else {
            pokemonSprite += `<img class= "imagen" src="${data.sprites.front_default}">`
        }
        document.getElementById('pokemonSprite').innerHTML = pokemonSprite;
        document.getElementById('pokemonName').innerHTML = data.name;
    } catch (error) {
        console.log(error);
    }
}
loadPokemon();