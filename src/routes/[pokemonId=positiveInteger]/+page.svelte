<script>
	import PokemonProfile from '$lib/features/info/PokemonProfile.svelte';
	import PokemonStats from '$lib/features/info/PokemonStats.svelte';
	import PokemonTypes from '$lib/features/info/PokemonTypes.svelte';
</script>

{#snippet iconDNA()}
	<svg
		aria-hidden="true"
		height="128"
		width="128"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
	>
		<path
			d="M18 1C18 1.71561 17.9359 2.37948 17.8155 3H8.23193C8.41382 3.72694 8.69997 4.38283 9.08066 5H17.1807C16.132 7.31672 14.1871 8.99371 12 10.7267C8.72906 8.13494 6 5.66845 6 1H4C4 6.46624 7.21013 9.46355 10.3863 12C7.21013 14.5365 4 17.5338 4 23H6C6 18.0404 9.08011 15.566 12.6178 12.7863L12.7096 12.7142C16.149 10.0123 20 6.98705 20 1H18ZM17.8155 21.0002H8.23193C8.41382 20.2733 8.69997 19.6174 9.08066 19.0002H17.1807C16.3939 17.262 15.1026 15.8839 13.583 14.5721C14.1162 14.1516 14.6526 13.7351 15.1811 13.3086C17.7659 15.5981 20 18.44 20 23.0002H18C18 22.2846 17.9359 21.6207 17.8155 21.0002Z"
		>
		</path>
	</svg>
{/snippet}

{#snippet iconMen()}
	<svg
		aria-hidden="true"
		height="128"
		width="128"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		><path
			d="M15.0491 8.53666L18.5858 5H14V3H22V11H20V6.41421L16.4633 9.95088C17.4274 11.2127 18 12.7895 18 14.5C18 18.6421 14.6421 22 10.5 22C6.35786 22 3 18.6421 3 14.5C3 10.3579 6.35786 7 10.5 7C12.2105 7 13.7873 7.57264 15.0491 8.53666ZM10.5 20C13.5376 20 16 17.5376 16 14.5C16 11.4624 13.5376 9 10.5 9C7.46243 9 5 11.4624 5 14.5C5 17.5376 7.46243 20 10.5 20Z"
		>
		</path>
	</svg>
{/snippet}

{#snippet iconWomen()}
	<svg
		aria-hidden="true"
		height="128"
		width="128"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		><path
			d="M11 15.9339C7.33064 15.445 4.5 12.3031 4.5 8.5C4.5 4.35786 7.85786 1 12 1C16.1421 1 19.5 4.35786 19.5 8.5C19.5 12.3031 16.6694 15.445 13 15.9339V18H18V20H13V24H11V20H6V18H11V15.9339ZM12 14C15.0376 14 17.5 11.5376 17.5 8.5C17.5 5.46243 15.0376 3 12 3C8.96243 3 6.5 5.46243 6.5 8.5C6.5 11.5376 8.96243 14 12 14Z"
		>
		</path>
	</svg>
{/snippet}

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
