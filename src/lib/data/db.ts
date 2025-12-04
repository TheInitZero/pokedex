import type { Pokemon, PokemonType } from '$lib';
import _pokemonData from './pokemonData.json';
import _pokemonTypeIndex from './pokemonTypeIndex.json';

type PokemonDataMap = {
	[id: string]: Pokemon;
};

type PokemonTypeIndexMap = {
	[type in PokemonType]: Pokemon['id'][];
};

const pokemonData: PokemonDataMap = _pokemonData as PokemonDataMap;
const pokemonTypeIndex: PokemonTypeIndexMap = _pokemonTypeIndex as PokemonTypeIndexMap;

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
	return pokemonData[String(id)];
}

function getPokemonIds(pokemonType: PokemonType): PokemonTypeIndexMap[PokemonType] {
	return pokemonTypeIndex[pokemonType];
}
