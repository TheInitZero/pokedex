<script lang="ts">
	import { page } from '$app/state';
	import type { Pokemon } from '$lib';
	import GeneralInfo from '$lib/features/info/GeneralInfo.svelte';
	import PokemonStats from '$lib/features/info/PokemonStats.svelte';

	const pokemon = $derived(page.data.pokemon) as Pokemon;
</script>

<svelte:head>
	<title>{pokemon.name} | Pokédex</title>
</svelte:head>

<article>
	<h2 class="page-title">{pokemon.name}</h2>

	<GeneralInfo {pokemon} />

	<PokemonStats {pokemon} />
</article>

<style>
	.page-title {
		text-align: center;
		margin-block-end: 1rem;
	}
</style>
