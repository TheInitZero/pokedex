import { describe, expect, test } from 'vitest';
import { db } from './db';

describe('db', () => {
	describe('getIds', () => {
		test('It returns ids of pokemons belonging to the provided pokemonType.', () => {
			expect(db.getIds('All').length).toBe(898);
			expect(db.getIds('Dark').length).toBe(55);
		});
	});

	describe('getPokemonById', () => {
		test('It returns a pokemon with the given id.', () => {
			expect(db.getPokemonById(20).name).toBe('Raticate');
			expect(db.getPokemonById(15).name).toBe('Beedrill');
		});
	});

	describe('getPokemonsByType', () => {
		test('It returns an array of pokemons belonging to the provided type.', () => {
			const result = db.getPokemonsByType('Grass');
			expect(result.length).toBe(107);
			expect(result[0].name).toBe('Bulbasaur');
		});
	});
});
