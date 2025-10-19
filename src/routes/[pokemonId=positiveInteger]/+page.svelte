<script>
	import { iconDNA, iconMen, iconWomen } from '$lib/components/Icons.svelte';
	import PokemonProfile from '$lib/features/info/PokemonProfile.svelte';
	import PokemonStats from '$lib/features/info/PokemonStats.svelte';
	import PokemonTypes from '$lib/features/info/PokemonTypes.svelte';
</script>

<svelte:head>
	<title>Bulbasaur | Pokédex</title>
</svelte:head>

<h2>Bulbasaur</h2>

<div>
	<img src="/assets/images/001.png" alt="" height="240" width="240" />
</div>

<section aria-labelledby="general-info-section-heading">
	<h3 id="general-info-section-heading">General Info</h3>

	<PokemonTypes />

	<PokemonProfile />

	<div aria-label="Species">
		{@render iconDNA()}
		<span>Seed Pokémon</span>
	</div>

	<div aria-label="Gender Ratio">
		{@render iconMen()}
		<span>87.5 : 12.5</span>
		{@render iconWomen()}
	</div>

	<div>
		<p>
			Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up
			the sun’s rays, the seed grows progressively larger.
		</p>
	</div>
</section>

<PokemonStats />
