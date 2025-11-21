<script lang="ts">
	import { type Pokemon } from '$lib/index';

	type Props = {
		pokemon: Pokemon;
	};

	const { pokemon }: Props = $props();
	const componentId = $props.id();
</script>

<section
	class="stats-section card"
	aria-labelledby="heading-{componentId}"
	aria-hidden={pokemon.hp == null}
>
	<h3 class="stats-section__title" id="heading-{componentId}">Stats</h3>

	<div class="stats">
		<div class="stat card">
			<h4 class="text-base">HP</h4>

			<p>{pokemon.hp ?? '?'}</p>
		</div>

		<div class="stat card">
			<h4 class="text-base">Attack</h4>

			<p>{pokemon.attack ?? '?'}</p>
		</div>

		<div class="stat card">
			<h4 class="text-base">Defense</h4>

			<p>{pokemon.defense ?? '?'}</p>
		</div>

		<div class="stat card">
			<h4 class="text-base">Special Attack</h4>

			<p>{pokemon['special attack'] ?? '?'}</p>
		</div>

		<div class="stat card">
			<h4 class="text-base">Special Defense</h4>

			<p>{pokemon['special defense'] ?? '?'}</p>
		</div>

		<div class="stat card">
			<h4 class="text-base">Speed</h4>

			<p>{pokemon.speed ?? '?'}</p>
		</div>
	</div>
</section>

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
