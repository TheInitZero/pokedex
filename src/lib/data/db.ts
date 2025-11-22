import type { Pokemon, PokemonType } from '$lib';
import pokemonData from './pokemonData.json';
import pokemonTypeIndex from './pokemonTypeIndex.json';

export function searchPokemonsByName(
	name: string,
	pokemons: Pokemon[] = searchPokemonsByType('All')
): Pokemon[] {
	if (name.trim().length == 0) return pokemons;
	return pokemons.filter(function namesMatch(pokemon) {
		return pokemon.name.toLowerCase().includes(name.toLowerCase());
	});
}

export function searchPokemonsByType(pokemonType: PokemonType): Pokemon[] {
	return getPokemonIds(pokemonType).map(getPokemonById);
}

export function getPokemonById(id: number): Pokemon {
	//@ts-ignore
	return pokemonData[id] as Pokemon;
}

function getPokemonIds(pokemonType: PokemonType): Pokemon['id'][] {
	return pokemonTypeIndex[pokemonType];
}
