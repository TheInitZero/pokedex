export type PokemonType =
	| 'Bug'
	| 'Dark'
	| 'Dragon'
	| 'Electric'
	| 'Fairy'
	| 'Fighting'
	| 'Fire'
	| 'Flying'
	| 'Ghost'
	| 'Grass'
	| 'Ground'
	| 'Ice'
	| 'Normal'
	| 'Poison'
	| 'Psychic'
	| 'Rock'
	| 'Steel'
	| 'Water';

export type Pokemon = {
	id: number;
	name: string;
	type: PokemonType[];
	hp?: number;
	attack?: number;
	defense?: number;
	'special attack'?: number;
	'special defense'?: number;
	speed?: number;
	species: string;
	description: string;
	height: string;
	weight: string;
	gender: string;
};

export function getImageFileName(pokemonId: number): string {
	const pokemonIdStringified = String(pokemonId);

	if (pokemonIdStringified.length == 1) return `00${pokemonId}`;
	if (pokemonIdStringified.length == 2) return `0${pokemonId}`;
	return pokemonIdStringified;
}
