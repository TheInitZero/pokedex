<script>
	import GeneralInfo from '$lib/features/info/GeneralInfo.svelte';
	import PokemonStats from '$lib/features/info/PokemonStats.svelte';
</script>

<svelte:head>
	<title>Bulbasaur | Pokédex</title>
</svelte:head>

<h2 class="title">Bulbasaur</h2>

<GeneralInfo />

<PokemonStats />

<style>
	.title {
		margin-top: 1em;
	}
</style>
