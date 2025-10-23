<script>
	import { getPokemomById } from '$lib/data/db';
	import PokemonCardGrid from '$lib/features/info/PokemonCardGrid.svelte';
	import Pagination from '$lib/features/pagination/Pagination.svelte';

	const sampleData = (function () {
		const data = [];

		for (let i = 1; i <= 12; i += 1) {
			data.push(getPokemomById(i));
		}

		return data;
	})();
</script>

<PokemonCardGrid pokemons={sampleData} />

<Pagination />
