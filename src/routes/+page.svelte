<script lang="ts">
	import { searchMachine } from '$lib/features/search/searchMachine';
	import { paginationMachine } from '$lib/features/pagination/paginationMachine';
	import PokemonCardGrid from '$lib/features/info/PokemonCardGrid.svelte';
	import Pagination from '$lib/features/pagination/Pagination.svelte';
	import Search from '$lib/features/search/Search.svelte';
	import { useMachine } from '@xstate/svelte';

	const { snapshot: searchMachineSnapshot, send: searchMachineSend } = useMachine(searchMachine);

	const { snapshot: paginationMachineSnapshot, send: paginationMachineSend } = useMachine(
		paginationMachine,
		{
			input: {
				currentPage: 1,
				lastPage: Math.ceil($searchMachineSnapshot.context.results.length / 12),
				cardsPerPage: 12,
				sliceStartIndex: 0
			}
		}
	);

	$effect(function onSearchResultsUpdate() {
		paginationMachineSend({
			type: 'UPDATE_LAST_PAGE',
			payload: { lastPage: Math.ceil($searchMachineSnapshot.context.results.length / 12) }
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
		pokemons={$searchMachineSnapshot.context.results.slice(
			$paginationMachineSnapshot.context.sliceStartIndex,
			$paginationMachineSnapshot.context.sliceStartIndex +
				$paginationMachineSnapshot.context.cardsPerPage
		)}
	/>
</section>

<Pagination
	currentPage={$paginationMachineSnapshot.context.currentPage}
	lastPage={$paginationMachineSnapshot.context.lastPage}
	goToPrevPage={function goToPrevPage() {
		paginationMachineSend({ type: 'PREV' });
	}}
	goToNextPage={function goToNextPage() {
		paginationMachineSend({ type: 'NEXT' });
	}}
	prevButtonDisabled={$paginationMachineSnapshot.context.currentPage <= 1}
	nextButtonDisabled={$paginationMachineSnapshot.context.currentPage >=
		$paginationMachineSnapshot.context.lastPage}
/>
