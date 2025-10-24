<script lang="ts">
	import type { PokemonType } from '$lib';

	const pokemonTypes: PokemonType[] = [
		'All',
		'Normal',
		'Fire',
		'Water',
		'Grass',
		'Electric',
		'Ice',
		'Fighting',
		'Poison',
		'Ground',
		'Flying',
		'Psychic',
		'Bug',
		'Rock',
		'Ghost',
		'Dragon',
		'Steel',
		'Dark',
		'Fairy'
	];
</script>

<form role="search" class="form">
	<div class="form__group form__group--1">
		<label for="search-name">Name:</label>
		<input class="input" type="text" name="search-name" id="search-name" />
	</div>

	<div class="form__group form__group--2">
		<label for="search-type">Type:</label>
		<select class="select" name="search-type" id="search-type">
			{#each pokemonTypes as pokemonType}
				<option value={pokemonType}>{pokemonType}</option>
			{/each}
		</select>
	</div>

	<div class="form__group form__group--3">
		<button class="button form__button" type="submit">
			<span>Search</span>
			<i class="icon icon--remix ri-search-line"></i>
		</button>
	</div>
</form>

<style>
	.form {
		display: grid;
		gap: 1.5rem;

		@media (min-width: 475px) {
			grid-template-columns: repeat(2, 1fr);
		}

		@media (min-width: 768px) {
			grid-template-columns: 2fr 2fr 1fr;
		}
	}

	.form__group {
		display: grid;
		gap: 0.5rem;
	}

	.form__group--3 {
		@media (min-width: 475px) {
			grid-column: span 2;
		}

		@media (min-width: 768px) {
			grid-column: span 1;
			justify-items: stretch;
			align-items: end;
		}
	}

	.input,
	.select {
		padding: 0.5em;
		border: 2px solid black;
		border-radius: 0.5em;
	}

	.form__button {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
	}
</style>
