

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
                    </ol>

                <img src="${pokemon.photo}"
                    alt="${pokemon.name}">
            </div>
        </li>
    `
}

const pokemonList = document.getElementById('pokemonList')


// aguardando uma promise = assíncrono

pokeApi.getPokemons().then((pokemons = []) => {// map((value, index, array))
    const newHTML = pokemons.map(convertPokemonToLi).join('')
    pokemonList.innerHTML = newHTML
})