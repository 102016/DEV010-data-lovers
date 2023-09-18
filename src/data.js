
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
} //extraer debilidad del objeto

function sortPokemonsByNameAscending(pokemons) {
  return pokemons.slice().sort((a, b) => a.name.localeCompare(b.name)); //ordena con short de A-Z
} 

function sortPokemonsByNameDescending(pokemons) { 
  return pokemons.slice().sort((a, b) => a.name.localeCompare(b.name)).reverse(); // Ordena con short A-Z y con reverse lo cambia de Z-A
} //return pokemons.reverse();

function sortPokemonsByNumberAscending(pokemons) { //parseInt() función analiza una cadena y devuelve un entero
  return pokemons.slice().sort((a, b) => parseInt(a.num) - parseInt(b.num));
}

function calculateAverageAttack(pokemons) {
  const totalAttack = pokemons.reduce((sum, pokemon) => sum + parseInt(pokemon.stats["base-attack"]), 0);
  return totalAttack / pokemons.length;
}

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

//poner export a cada funcion 
