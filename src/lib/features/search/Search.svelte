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

	<fieldset>
		<legend>Type:</legend>
		<ul>
			{#each pokemonTypes as pokemonType}
				<li>
					<label for="type-{pokemonType}">{pokemonType}</label>
					<input type="checkbox" name="search-type" id="type-{pokemonType}" value={pokemonType} />
				</li>
			{/each}
		</ul>
	</fieldset>

	<div>
		<button type="submit">I choose you!</button>
	</div>
</form>
