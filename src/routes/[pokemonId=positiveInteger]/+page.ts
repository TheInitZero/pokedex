import { getPokemomById } from '$lib/data/db';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async function load(event) {
	const pokemon = getPokemomById(Number(event.params.pokemonId));

	if (pokemon == null) return error(404, { message: 'Pokémon not found' });

	return {
		pokemon
	};
};
