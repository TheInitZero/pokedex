import type { PokemonType } from '$lib';
import { db } from '$lib/data/db';
import type { PageLoad } from './$types';

export const load: PageLoad = async function load(event) {
	const searchName = event.url.searchParams.get('search-name') ?? '';
	const searchType = (event.url.searchParams.get('search-type') ?? 'All') as PokemonType;
	const searchResults = db.getPokemonsByName(searchName, db.getPokemonsByType(searchType));

	return {
		pokemons: searchResults
	};
};
