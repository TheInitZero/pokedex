<script>
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

{#snippet iconSearch()}
	<svg
		class="icon"
		aria-hidden="true"
		height="128"
		width="128"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
	>
		<path
			d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
		>
		</path>
	</svg>
{/snippet}

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

	.icon {
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
