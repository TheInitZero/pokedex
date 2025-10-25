import { db } from '$lib/data/db';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async function load(event) {
	const pokemon = db.getPokemonById(Number(event.params.pokemonId));
	if (pokemon == null) return error(404, { message: 'Pokémon not found' });
	return { pokemon };
};
