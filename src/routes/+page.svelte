<script lang="ts">
	import PokemonCardGrid from '$lib/features/info/PokemonCardGrid.svelte';
	import Pagination from '$lib/features/pagination/Pagination.svelte';
	import Search from '$lib/features/search/Search.svelte';
	import { page } from '$app/state';
	import type { Pokemon, PokemonType } from '$lib';

	const cardsPerPage = 12;
	let totalPages = $derived(Math.ceil(page.data.pokemons.length / cardsPerPage));
	let currentPage = $derived(Number(page.url.searchParams.get('page') ?? 1));
	let searchName = $derived(page.url.searchParams.get('search-name') ?? '');
	let searchType = $derived(page.url.searchParams.get('search-type') ?? 'All') as PokemonType;
	let sliceIndex = $derived(cardsPerPage * (currentPage - 1));
	let pokemons = $derived(
		page.data.pokemons.slice(sliceIndex, sliceIndex + cardsPerPage)
	) as Pokemon[];
</script>

<section class="card" aria-label="Search">
	<Search />
</section>

{#if pokemons.length > 0}
	<section aria-label="Pokemon cards">
		<PokemonCardGrid {pokemons} />
	</section>

	<Pagination {currentPage} {totalPages} {searchName} {searchType} />
{:else}
	<section class="card no-results flow" aria-labelledby="no-results-title">
		<h2 id="no-results-title" class="text-h5">No search results</h2>
		<p>We couldn't find the pokemon you are looking for.</p>
	</section>
{/if}

<style>
	.no-results {
		max-width: 320px;
		margin-left: auto;
		margin-right: auto;
		text-align: center;
	}
</style>
