<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Pagination from '$lib/features/pagination/Pagination.svelte';

	const { children } = $props();
</script>

<Header />

<main>
	{@render children?.()}
</main>

<Pagination />
