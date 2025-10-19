<script>
	import PokemonProfile from './PokemonProfile.svelte';
	import PokemonTypes from './PokemonTypes.svelte';
</script>

<article class="card" aria-labelledby="pokemon-name-1">
	<div class="card__group card__group--1">
		<h2 class="text-h6 card__heading" id="pokemon-name-1">
			<a href="/1">Bulbasaur</a>
		</h2>

		<PokemonTypes />

		<PokemonProfile />
	</div>

	<div class="card__group card__group--2">
		<img src="/assets/images/001.png" alt="" height="128" width="128" />
	</div>
</article>

<style>
	.card {
		display: flex;
		flex-direction: column-reverse;
		gap: 0.5rem;
		padding: 1em;
		border: 2px solid black;
		border-radius: 1em;
		width: 240px;
	}

	.card__heading {
		text-align: center;
	}

	.card__group--1 {
		display: grid;
		gap: 0.5rem;
	}

	.card__group--2 {
		display: grid;
		place-items: center;
	}
</style>
