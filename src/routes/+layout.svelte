<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Pagination from '$lib/features/pagination/Pagination.svelte';

	const { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/assets/pokeball.svg" type="image/svg+xml" />
</svelte:head>

<Header />

<main id="main">
	{@render children?.()}
</main>

<Pagination />
