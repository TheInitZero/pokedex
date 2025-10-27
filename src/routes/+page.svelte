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

	$inspect({ totalPages, currentPage, searchName, searchType, sliceIndex, pokemons });
</script>

<section class="card" aria-label="Search">
	<Search />
</section>

<section aria-label="Pokemon cards">
	<PokemonCardGrid {pokemons} />
</section>

<Pagination {currentPage} {totalPages} {searchName} {searchType} />
