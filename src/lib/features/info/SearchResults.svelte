<script lang="ts">
	import type { Pokemon } from '$lib/index';
	import PokemonCard from './PokemonCard.svelte';

	type Props = {
		pokemons: Pokemon[];
	};

	const { pokemons }: Props = $props();
</script>

<section class="results" aria-label="Search results">
	<ul class="results__list">
		{#each pokemons as pokemon (pokemon.id)}
			<li class="results__list-item">
				<PokemonCard {pokemon} />
			</li>
		{/each}
	</ul>
</section>

<style>
	.results {
		margin-block-end: 1rem;
	}

	.results__list {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fit, 8.5rem);
		place-content: center;

		@media (width >= 39rem) {
			grid-template-columns: repeat(auto-fit, 18rem);
			place-content: stretch;
		}
	}

	.results__list-item {
		list-style-type: none;
	}
</style>
