<script lang="ts">
	import { searchMachine } from '$lib/features/search/searchMachine';
	import { paginationMachine } from '$lib/features/pagination/paginationMachine';
	import PokemonCardGrid from '$lib/features/info/PokemonCardGrid.svelte';
	import Pagination from '$lib/features/pagination/Pagination.svelte';
	import Search from '$lib/features/search/Search.svelte';
	import { useMachine } from '@xstate/svelte';

	const { snapshot: searchMachineSnapshot, send: searchMachineSend } = useMachine(searchMachine);

	let searchResults = $derived($searchMachineSnapshot.context.results);

	const { snapshot: paginationMachineSnapshot, send: paginationMachineSend } = useMachine(
		paginationMachine,
		{
			input: {
				currentPage: 1,
				lastPage: Math.ceil(searchResults.length / 12),
				cardsPerPage: 12,
				sliceStartIndex: 0
			}
		}
	);

	let paginationContext = $derived($paginationMachineSnapshot.context);

	$effect(function onSearchResultsUpdate() {
		paginationMachineSend({
			type: 'SET_CONTEXT',
			payload: {
				context: {
					currentPage: 1,
					lastPage: Math.ceil(searchResults.length / 12),
					cardsPerPage: 12,
					sliceStartIndex: 0
				}
			}
		});
	});
</script>

<section class="card" aria-label="Search">
	<Search
		sendEvent={function sendEvent(pokemonName, pokemonType) {
			searchMachineSend({ type: 'SEARCH', payload: { pokemonName, pokemonType } });
		}}
	/>
</section>

<section aria-label="Pokemon cards">
	<PokemonCardGrid
		pokemons={searchResults.slice(
			paginationContext.sliceStartIndex,
			paginationContext.sliceStartIndex + paginationContext.cardsPerPage
		)}
	/>
</section>

<Pagination
	currentPage={paginationContext.currentPage}
	lastPage={paginationContext.lastPage}
	goToPrevPage={function goToPrevPage() {
		paginationMachineSend({ type: 'PREV' });
	}}
	goToNextPage={function goToNextPage() {
		paginationMachineSend({ type: 'NEXT' });
	}}
	prevButtonDisabled={paginationContext.currentPage <= 1}
	nextButtonDisabled={paginationContext.currentPage >= paginationContext.lastPage}
/>
