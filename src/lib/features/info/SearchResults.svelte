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
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.results__list-item {
		list-style-type: none;
	}
</style>
