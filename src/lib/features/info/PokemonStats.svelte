<script lang="ts">
	import RemixIcon from '$lib/components/RemixIcon.svelte';
	import { type Pokemon } from '$lib/index';

	type Props = {
		pokemon: Pokemon;
	};

	const { pokemon }: Props = $props();
</script>

<section class="flow" aria-labelledby="stats-section-heading" aria-hidden={pokemon.hp == null}>
	<h3 id="stats-section-heading">Stats</h3>

	<ul class="stats" aria-labelledby="stats-section-heading">
		<li class="stat card">
			<h4 class="stat__heading text-base">HP</h4>
			<p class="stat__point text-h5">{pokemon.hp ?? '?'}</p>
			<!-- <i class="stat__icon icon icon--remix ri-heart-line"></i> -->
			<RemixIcon className="stat__icon" name="ri-heart-line" --size="2rem" --color="black" />
		</li>
		<li class="stat card">
			<h4 class="stat__heading text-base">Attack</h4>
			<p class="stat__point text-h5">{pokemon.attack ?? '?'}</p>
			<!-- <i class="stat__icon icon icon--remix ri-sword-line"></i> -->
			<RemixIcon className="stat__icon" name="ri-sword-line" --size="2rem" --color="black" />
		</li>
		<li class="stat card">
			<h4 class="stat__heading text-base">Defense</h4>
			<p class="stat__point text-h5">{pokemon.defense ?? '?'}</p>
			<!-- <i class="stat__icon icon icon--remix ri-shield-line"></i> -->
			<RemixIcon className="stat__icon" name="ri-shield-line" --size="2rem" --color="black" />
		</li>
		<li class="stat card">
			<h4 class="stat__heading text-base">Special Attack</h4>
			<p class="stat__point text-h5">{pokemon['special attack'] ?? '?'}</p>
			<!-- <i class="stat__icon icon icon--remix ri-sword-fill"></i> -->
			<RemixIcon className="stat__icon" name="ri-sword-fill" --size="2rem" --color="black" />
		</li>
		<li class="stat card">
			<h4 class="stat__heading text-base">Special Defense</h4>
			<p class="stat__point text-h5">{pokemon['special defense'] ?? '?'}</p>
			<!-- <i class="stat__icon icon icon--remix ri-shield-fill"></i> -->
			<RemixIcon className="stat__icon" name="ri-shield-fill" --size="2rem" --color="black" />
		</li>
		<li class="stat card">
			<h4 class="stat__heading text-base">Speed</h4>
			<p class="stat__point text-h5">{pokemon.speed ?? '?'}</p>
			<!-- <i class="stat__icon icon icon--remix ri-dashboard-3-line"></i> -->
			<RemixIcon className="stat__icon" name="ri-dashboard-3-line" --size="2rem" --color="black" />
		</li>
	</ul>
</section>

<style>
	.stats {
		--num-cols: 2;
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(var(--num-cols), 1fr);

		@media (min-width: 768px) {
			--num-cols: 3;
		}
	}

	.stat {
		position: relative;
		list-style-type: none;
		display: grid;
	}

	.stat__point {
		margin-top: 0.5em;
	}

	:global(.stat__icon) {
		position: absolute;
		bottom: 0.25rem;
		right: 0.25rem;
		opacity: 0.15;
	}
</style>
