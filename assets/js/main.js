
function convertPokemonTypesToHtml(pokemonTypes) {
  return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

function convertPokemonToHtml(pokemon){
  return `
    <li class="pokemon">
      <span class="number">${pokemon.order}</span>
      <span class="name">${pokemon.name}</span>
    <div class="detail">
      <ol class="types">
        ${convertPokemonTypesToHtml(pokemon.types).join('')}
      </ol>
      <img src="${pokemon.versions.generation-vi.x-y.front_default}" alt="${pokemon.name}">

    </div>
  </li>
  `
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {
  pokemonList.innerHTML = pokemons.map(convertPokemonToHtml).join('')
  pokemonList.innerHTML = newHtml
    
  })
