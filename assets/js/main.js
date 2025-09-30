const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
const loader = document.getElementById('loader');


const maxRecords = 151;
const limit = 10;
let offset = 0;


function showLoader() {
    loader.style.display = 'flex';
    loadMoreButton.style.display = 'none';
}

function hideLoader() {
    loader.style.display = 'none';
    loadMoreButton.style.display = 'flex';
}

/**
 * Converte o nome de uma estatística para um formato mais legível.
 * @param {string} statName - O nome da estatística (ex: 'special-attack').
 * @returns {string} - O nome formatado (ex: 'Sp. Atk').
 */
function formatStatName(statName) {
    return {
        'hp': 'HP',
        'attack': 'Attack',
        'defense': 'Defense',
        'special-attack': 'Sp. Atk',
        'special-defense': 'Sp. Def',
        'speed': 'Speed'
    }[statName] || statName;
}

/**
 * Gera o HTML para as barras de estatísticas de um Pokémon.
 * @param {Pokemon} pokemon - O objeto do Pokémon contendo as estatísticas.
 * @returns {string} - O HTML das barras de estatísticas.
 */
function getStatsHtml(pokemon) {
    return pokemon.stats.map(stat => `
        <li class="stat-row">
            <span class="stat-name">${formatStatName(stat.name)}</span>
            <div class="stat-bar">
                <div class="stat-value" style="width: ${stat.base_stat}px;"></div>
            </div>
        </li>
    `).join('');
}

/**
 * Converte um objeto Pokémon em um elemento <li> HTML.
 * @param {Pokemon} pokemon - O objeto do Pokémon.
 * @returns {string} - A string HTML do elemento <li>.
 */
function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}" aria-label="Card do Pokémon ${pokemon.name}">
            <div class="pokemon-content">
                <span class="number">#${String(pokemon.number).padStart(3, '0')}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}" alt="Imagem do ${pokemon.name}">
                </div>
            </div>
            <div class="pokemon-card">
                <h4>Base Stats</h4>
                <ol class="stats">${getStatsHtml(pokemon)}</ol>
            </div>
        </li>
    `;
}

/**
 * Carrega uma nova leva de Pokémons da API e os adiciona à lista.
 * @param {number} offset - O ponto de partida na lista da Pokedex.
 * @param {number} limit - O número de Pokémons a serem buscados.
 */
function loadPokemonItens(offset, limit) {
    showLoader(); // Mostra o spinner antes de fazer a requisição
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('');
        pokemonList.innerHTML += newHtml;
    }).catch(err => {
        console.error("Falha ao carregar Pokémons:", err); // Adiciona um log de erro
    }).finally(() => {
        hideLoader(); // Esconde o spinner após a requisição (sucesso ou falha)
    });
}

// --- Event Listeners ---
loadMoreButton.addEventListener('click', () => {
    offset += limit;
    const qtdRecordsWithNextPage = offset + limit;

    if (qtdRecordsWithNextPage >= maxRecords) {
        const newLimit = maxRecords - offset;
        loadPokemonItens(offset, newLimit);
        loadMoreButton.parentElement.removeChild(loadMoreButton); 
    } else {
        loadPokemonItens(offset, limit);
    }
});


loadPokemonItens(offset, limit);