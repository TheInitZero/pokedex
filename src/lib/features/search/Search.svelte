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

<form role="search" class="form card" method="get" action="/">
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

			{@render iconSearch()}
		</button>
	</div>
</form>

{#snippet iconSearch()}
	<svg
		aria-hidden="true"
		class="remix-icon"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		><path
			d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
		></path></svg
	>
{/snippet}

<style>
	.remix-icon {
		--remix-icon-size: 1.25rem;
		--remix-icon-color: var(--color-text);
	}

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

	.form__button {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
	}
</style>
