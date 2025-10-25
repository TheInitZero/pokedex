<script lang="ts">
	import { searchMachine } from '$lib/features/search/searchMachine';
	import PokemonCardGrid from '$lib/features/info/PokemonCardGrid.svelte';
	import Pagination from '$lib/features/pagination/Pagination.svelte';
	import Search from '$lib/features/search/Search.svelte';
	import { useMachine } from '@xstate/svelte';

	const { snapshot: searchMachineSnapshot, send: searchMachineSend } = useMachine(searchMachine);
</script>

<section class="card" aria-label="Search">
	<Search
		sendEvent={function sendEvent(pokemonName, pokemonType) {
			searchMachineSend({ type: 'SEARCH', payload: { pokemonName, pokemonType } });
		}}
	/>
</section>

<section aria-label="Pokemon cards">
	<PokemonCardGrid pokemons={$searchMachineSnapshot.context.results.slice(0, 12)} />
</section>

<Pagination />
