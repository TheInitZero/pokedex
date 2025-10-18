<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';

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

<a class="skip-link" href="#main">Skip to content</a>

<Header />

<main id="main">
	{@render children?.()}
</main>
