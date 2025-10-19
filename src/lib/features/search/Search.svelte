<script>
	import { iconSearch } from '$lib/components/Icons.svelte';

	const pokemonTypes = [
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
			<option value="All">All</option>

			{#each pokemonTypes as pokemonType}
				<option value={pokemonType}>{pokemonType}</option>
			{/each}
		</select>
	</div>

	<div class="form__group form__group--3">
		<button class="button" type="submit">
			<span>Search</span>
			{@render iconSearch()}
		</button>
	</div>
</form>

<style>
	.form {
		display: grid;
		gap: 1.5rem;
	}

	.form__group {
		display: grid;
		gap: 0.5rem;
	}

	:global(.icon--search) {
		height: 1rem;
		width: 1rem;
		fill: white;
	}

	.input,
	.select {
		padding: 0.5em;
		border: 2px solid black;
		border-radius: 0.5em;
	}

	.button {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		justify-content: center;
		padding: 0.5em;
		border: 2px solid black;
		border-radius: 0.5em;
		background-color: black;
		color: white;
	}

	@media (min-width: 475px) {
		.form {
			grid-template-columns: repeat(2, 1fr);
		}

		.form__group--3 {
			grid-column: span 2;
		}
	}

	@media (min-width: 768px) {
		.form {
			grid-template-columns: 2fr 2fr 1fr;
		}

		.form__group--3 {
			grid-column: span 1;
			justify-items: stretch;
			align-items: end;
		}
	}
</style>
