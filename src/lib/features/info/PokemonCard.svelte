<script>
	import PokemonProfile from './PokemonProfile.svelte';
	import PokemonTypes from './PokemonTypes.svelte';
</script>

<article aria-labelledby="pokemon-name-1">
	<div>
		<h2 id="pokemon-name-1">
			<a href="/1">Bulbasaur</a>
		</h2>

		<PokemonTypes />

		<PokemonProfile />
	</div>

	<div>
		<img src="/assets/images/001.png" alt="" height="128" width="128" />
	</div>
</article>
