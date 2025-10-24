<script>
	import { getPokemomById } from '$lib/data/db';
	import PokemonCardGrid from '$lib/features/info/PokemonCardGrid.svelte';
	import Pagination from '$lib/features/pagination/Pagination.svelte';
	import Search from '$lib/features/search/Search.svelte';

	const sampleData = (function () {
		const data = [];

		for (let i = 1; i <= 12; i += 1) {
			data.push(getPokemomById(i));
		}

		return data;
	})();
</script>

<section class="card" aria-label="Search">
	<Search />
</section>

<section aria-label="Pokemon cards">
	<PokemonCardGrid pokemons={sampleData} />
</section>

<Pagination />
