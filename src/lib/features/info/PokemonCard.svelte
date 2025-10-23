<script lang="ts">
	import PokemonTypeIcon from './PokemonTypeIcon.svelte';
	import type { Pokemon } from '$lib/index';

	type Props = {
		pokemon: Pokemon;
	};

	const { pokemon }: Props = $props();

	function getImageFileName(pokemonId: number): string {
		const pokemonIdStringified = String(pokemonId);

		if (pokemonIdStringified.length == 1) return `00${pokemonId}`;
		if (pokemonIdStringified.length == 2) return `0${pokemonId}`;
		return pokemonIdStringified;
	}
</script>

<article class="card" aria-labelledby="pokemon-name-1">
	<img
		class="card__image"
		src="/assets/images/{getImageFileName(pokemon.id)}.png"
		alt=""
		height="284"
		width="284"
	/>

	<h2 class="card__heading text-h3" id="pokemon-name-1">
		<a href="/{pokemon.id}">{pokemon.name}</a>
	</h2>

	<p class="sr-only">{pokemon.name} belongs to the types:</p>

	{#each pokemon.type as pokemonType}
		<div class="card__group button">
			<PokemonTypeIcon {pokemonType} />
			<span>{pokemonType}</span>
		</div>
	{/each}

	<p class="sr-only">{pokemon.name}'s profile:</p>

	<div class="card__group" aria-label="Weight">
		<i class="icon icon--remix ri-weight-line"></i>
		<span>{pokemon.weight}</span>
	</div>

	<div class="card__group" aria-label="Height">
		<i class="icon icon--remix ri-ruler-line"></i>
		<span>{pokemon.height}</span>
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
