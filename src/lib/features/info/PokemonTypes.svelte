<script>
	import PokemonTypeIcon from './PokemonTypeIcon.svelte';
</script>

<ul class="type-list" aria-label="Bulbasaur belongs to the types:">
	<li class="type-list__item button">
		<PokemonTypeIcon pokemonType="Grass" />
		<span class="type-list__name">Grass</span>
	</li>
	<li class="type-list__item button">
		<PokemonTypeIcon pokemonType="Poison" />
		<span class="type-list__name">Poison</span>
	</li>
</ul>

<style>
	.type-list {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
	}

	.type-list__item {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.type-list__name {
		font-size: var(--font-size-sm);
	}
</style>
