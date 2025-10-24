import { describe, test, expect } from 'vitest';
import { createActor } from 'xstate';
import { searchMachine } from './searchMachine';
import { db } from '$lib/data/db';

describe('searchMachine', () => {
	test(`When 'SEARCH' event is sent, results are updated.`, () => {
		const actor = createActor(searchMachine);
		actor.start();
		expect(actor.getSnapshot().context.results.length).toBe(db.getIds('All').length);
		actor.send({ type: 'SEARCH', payload: { pokemonName: '', pokemonType: 'Grass' } });
		expect(actor.getSnapshot().context.results.length).toBe(db.getIds('Grass').length);
		actor.send({ type: 'SEARCH', payload: { pokemonName: 'bulba', pokemonType: 'Grass' } });
		expect(actor.getSnapshot().context.results.length).toBe(1);
		expect(actor.getSnapshot().context.results[0].name).toBe('Bulbasaur');
	});
});
