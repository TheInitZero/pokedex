<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Pagination from '$lib/features/pagination/Pagination.svelte';

	const { children } = $props();
</script>

<svelte:head>
	<title>Pokédex</title>
	<link rel="icon" href="/assets/pokeball.svg" type="image/svg+xml" />
	<meta
		name="description"
		content="Explore the ultimate Pokédex! Search, browse, and learn about every Pokémon, their stats, types and more. Perfect for trainers and fans alike."
	/>
</svelte:head>

<Header />

<main id="main">
	{@render children?.()}
</main>

<Pagination />
