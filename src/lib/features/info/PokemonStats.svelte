<script lang="ts">
	import { type Pokemon } from '$lib/index';

	type Props = {
		pokemon: Pokemon;
	};

	const { pokemon }: Props = $props();
</script>

<section class="stats-section card" aria-hidden={pokemon.hp == null}>
	<h3 class="stats-section__title">Stats</h3>

	<div class="stats">
		{@render stat({ name: 'HP', points: pokemon['hp'] })}

		{@render stat({ name: 'Attack', points: pokemon['attack'] })}

		{@render stat({ name: 'Defense', points: pokemon['defense'] })}

		{@render stat({ name: 'Special Attack', points: pokemon['special attack'] })}

		{@render stat({ name: 'Special Defense', points: pokemon['special defense'] })}

		{@render stat({ name: 'Speed', points: pokemon['speed'] })}
	</div>
</section>

{#snippet stat({ name, points }: { name: string; points?: number })}
	<section class="stat card">
		<h4 class="text-base">{name}</h4>

		<p>{points ?? '?'}</p>
	</section>
{/snippet}

<style>
	.stats-section__title {
		margin-block-end: 1rem;
	}

	.stats {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(2, 1fr);
		grid-auto-rows: 1fr;

		@media (width >= 39rem) {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	.stat {
		padding: 0.5rem;
		background-color: var(--color-bg-light);
		display: grid;
		gap: 0.5rem;

		@media (width >= 39rem) {
			padding: 1rem;
		}
	}
</style>
