import type { Pokemon } from '$lib';
import pokemonData from './pokemonData.json';
import pokemonTypeIndex from './pokemonTypeIndex.json';

export function getPokemomById(id: number): Pokemon {
	//@ts-ignore
	return pokemonData[id];
}
