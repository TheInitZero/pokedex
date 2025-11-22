import type { PokemonType } from '$lib';
import { searchPokemonsByName, searchPokemonsByType } from '$lib/data/db';
import type { PageLoad } from './$types';

export const load: PageLoad = async function load(event) {
	const searchName = event.url.searchParams.get('search-name') ?? '';
	const searchType = (event.url.searchParams.get('search-type') ?? 'All') as PokemonType;
	const searchResults = searchPokemonsByName(searchName, searchPokemonsByType(searchType));

	return {
		pokemons: searchResults
	};
};
