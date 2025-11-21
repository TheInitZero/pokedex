<script lang="ts">
	import type { PokemonType } from '$lib';
	import RemixIcon from '$lib/components/RemixIcon.svelte';

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

<form role="search" class="form card" method="get">
	<div class="form__group">
		<label for="search-name">Name:</label>
		<input type="text" name="search-name" id="search-name" class="form__input" />
	</div>

	<div class="form__group">
		<label for="search-type">Type:</label>
		<select name="search-type" id="search-type" class="form__select">
			{#each pokemonTypes as pokemonType}
				<option value={pokemonType}>{pokemonType}</option>
			{/each}
		</select>
	</div>

	<div class="form__group form__group--span-full">
		<button type="submit" class="form__button">
			<span>Search</span>
			<RemixIcon name="ri-search-line" />
		</button>
	</div>
</form>

<style>
	.form__input,
	.form__select,
	.form__button {
		inline-size: 100%;
		padding: 0.5rem;
		border-radius: 0.25rem;
		border: 2px solid var(--color-border);
		background-color: var(--color-bg-light);
		color: var(--color-text);
	}

	.form {
		display: grid;
		gap: 1rem;

		@media (width >= 39rem) {
			grid-template-columns: repeat(2, 1fr);
		}

		@media (width >= 58rem) {
			grid-template-columns: 2fr 2fr 1fr;
		}
	}

	.form__group {
		display: grid;
		gap: 0.5rem;
	}

	.form__group--span-full {
		@media (width >= 39rem) {
			grid-column: span 2;
		}

		@media (width >= 58rem) {
			grid-column: span 1;
			align-self: flex-end;
		}
	}
</style>
