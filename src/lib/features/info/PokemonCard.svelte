<script>
	import PokemonTypeIcon from './PokemonTypeIcon.svelte';
</script>

<article class="card" aria-labelledby="pokemon-name-1">
	<img class="card__image" src="/assets/images/001.png" alt="" height="284" width="284" />

	<h2 class="card__heading text-h3" id="pokemon-name-1">
		<a href="/1">Bulbasaur</a>
	</h2>

	<p class="sr-only">Bulbasaur belongs to the types:</p>

	<div class="card__group button">
		<PokemonTypeIcon pokemonType="Grass" />
		<span>Fighting</span>
	</div>

	<div class="card__group button">
		<PokemonTypeIcon pokemonType="Poison" />
		<span>Fighting</span>
	</div>

	<p class="sr-only">Bulbasaur's profile:</p>

	<div class="card__group" aria-label="Weight">
		<i class="icon icon--remix ri-weight-line"></i>
		<span>6.9 kg</span>
	</div>

	<div class="card__group" aria-label="Height">
		<i class="icon icon--remix ri-ruler-line"></i>
		<span>0.7 m</span>
	</div>
</article>

<style>
	.card {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		justify-items: center;
		gap: 0.5rem;
		max-width: 320px;
	}

	.card__image {
		grid-column: span 2;
	}

	.card__heading {
		grid-column: span 2;
	}

	.card__group {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-weight: bold;
	}

	.icon {
		--color: black;
	}

	.card__group :global(.icon) {
		--size: 1.5rem;
	}
</style>
