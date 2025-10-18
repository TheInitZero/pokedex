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

<form role="search">
	<div>
		<label for="search-name">Name:</label>
		<input type="text" name="search-name" id="search-name" />
	</div>

	<div>
		<label for="search-type">Type:</label>
		<select name="search-type" id="search-type">
			<option value="All">All</option>

			{#each pokemonTypes as pokemonType}
				<option value={pokemonType}>{pokemonType}</option>
			{/each}
		</select>
	</div>

	<div>
		<button type="submit">Search</button>
	</div>
</form>
