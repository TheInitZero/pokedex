import type { Pokemon, PokemonType } from '$lib';
import pokemonData from './pokemonData.json';
import pokemonTypeIndex from './pokemonTypeIndex.json';

export const db = { getPokemonsByType, getPokemonsByName, getIds, getPokemonById };

function getPokemonsByName(
	name: string,
	pokemons: Pokemon[] = getPokemonsByType('All')
): Pokemon[] {
	if (name.trim().length == 0) return pokemons;
	return pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(name.toLowerCase()));
}

function getPokemonsByType(pokemonType: PokemonType): Pokemon[] {
	return getIds(pokemonType).map(getPokemonById);
}

function getIds(pokemonType: PokemonType): number[] {
	return pokemonTypeIndex[pokemonType];
}

function getPokemonById(id: number): Pokemon {
	//@ts-ignore
	return pokemonData[id] as Pokemon;
}
