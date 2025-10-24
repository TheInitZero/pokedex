import type { Pokemon, PokemonType } from '$lib';
import { db } from '$lib/data/db';
import { assign, setup } from 'xstate';

export const searchMachine = setup({
	types: {
		context: {} as { results: Pokemon[] },
		events: {} as { type: 'SEARCH'; payload: { pokemonName: string; pokemonType: PokemonType } }
	},
	actions: {
		getSearchResults: assign({
			results({ event }) {
				const { pokemonName, pokemonType } = event.payload;
				return db.getPokemonsByName(pokemonName, db.getPokemonsByType(pokemonType));
			}
		})
	}
}).createMachine({
	id: 'search',
	context: {
		results: db.getPokemonsByName('')
	},
	on: {
		SEARCH: {
			actions: [{ type: 'getSearchResults' }]
		}
	}
});
