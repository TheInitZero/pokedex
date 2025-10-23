<script lang="ts">
	import type { Pokemon } from '$lib/index';
	import PokemonCard from './PokemonCard.svelte';

	type Props = {
		pokemons: Pokemon[];
	};

	const { pokemons }: Props = $props();
</script>

<ul class="list">
	{#each pokemons as pokemon (pokemon.id)}
		<li class="list__item">
			<PokemonCard {pokemon} />
		</li>
	{/each}
</ul>

<style>
	.list {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.list__item {
		list-style-type: none;
	}
</style>
