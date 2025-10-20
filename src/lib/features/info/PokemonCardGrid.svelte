<script>
	import PokemonCard from './PokemonCard.svelte';
</script>

<ul class="list">
	{#each { length: 12 }, index (index)}
		<li class="list__item">
			<PokemonCard />
		</li>
	{/each}
</ul>

<style>
	.list {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		gap: 1rem;
		margin-top: 2em;
	}

	.list__item {
		list-style-type: none;
	}
</style>
