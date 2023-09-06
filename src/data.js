
function filterPokemonsByType(pokemons, type) {
  return pokemons.filter(pokemon => pokemon.type.includes(type));
} // funcion para el primer filtro por tipo de pokemon

function filterPokemonsByName(pokemons, name) {
  return pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(name.toLowerCase()));
}
function generateQuickMoveNames(quickMoves) {
  return quickMoves.map(move => move.name).join(', ');
}// extraer el nombre del string del objeto del atributo quick moves

function generateResistantList(resistantTypes) {
  return resistantTypes.join(', ');
} // extraer resistencia del objeto

function generateWeaknessesList(weaknessesTypes) {
  return weaknessesTypes.join(', ');

  //extraer debilidad del objeto
} 
function sortPokemonsByNameAscending(pokemons) {
  return pokemons.slice().sort((a, b) => a.name.localeCompare(b.name));
} //filtra o ordena los pokemones por nombre acendente a-z

function sortPokemonsByNameDescending(pokemons) {
  return pokemons.slice().sort((a, b) => a.name.localeCompare(b.name)).reverse();
}//filtra o ordena los pokemones por nombre decendente z-a

function sortPokemonsByNumberAscending(pokemons) {
  return pokemons.slice().sort((a, b) => parseInt(a.num) - parseInt(b.num));
} //filtra o ordena los pokemones por numero de acendente 1-251

function calculateAverageAttack(pokemons) {
  const totalAttack = pokemons.reduce((sum, pokemon) => sum + parseInt(pokemon.stats["base-attack"]), 0);
  return totalAttack / pokemons.length;
}//calcula el ataque en promedio segun el tipo de Pokemon
export {
  filterPokemonsByName,
  filterPokemonsByType,
  generateQuickMoveNames,
  generateResistantList,
  generateWeaknessesList,
  sortPokemonsByNameAscending,
  sortPokemonsByNameDescending,
  sortPokemonsByNumberAscending,
  calculateAverageAttack,
} 


