<script>
	import PokemonTypeIcon from './PokemonTypeIcon.svelte';
</script>

<section class="flow" aria-labelledby="general-info-section-heading">
	<h3 id="general-info-section-heading">General Info</h3>

	<div class="tiles">
		<div class="tile tile--1 card">
			<img class="tile__image" src="/assets/images/001.png" alt="" />
		</div>

		<div class="tile tile--2 card">
			<h4 class="tile__heading text-base">Types</h4>
			<div class="tile__content text-h5">
				<p>Grass, Poison</p>
			</div>
			<PokemonTypeIcon className="tile__icon" pokemonType="Grass" />
			<PokemonTypeIcon className="tile__icon" pokemonType="Poison" />
		</div>

		<div class="tile tile--3 card">
			<h4 class="tile__heading text-base">Profile</h4>
			<div class="tile__content text-h5">
				<p>6.9 kg,<br /> 0.7 m</p>
			</div>
			<i class="tile__icon icon icon--remix ri-weight-line"></i>
			<i class="tile__icon icon icon--remix ri-ruler-line"></i>
		</div>

		<div class="tile tile--4 card">
			<h4 class="tile__heading text-base">Species</h4>
			<div class="tile__content text-h5">
				<p>Seed Pokémon</p>
			</div>
			<i class="tile__icon icon icon--remix ri-dna-line"></i>
		</div>

		<div class="tile tile--5 card">
			<h4 class="tile__heading text-base">Gender Ratio</h4>
			<div class="tile__content text-h5">
				<p>87.5 : 12.5</p>
			</div>
			<i class="tile__icon icon icon--remix ri-women-line"></i>
			<i class="tile__icon icon icon--remix ri-men-line"></i>
		</div>

		<div class="tile tile--6 card">
			<h4 class="tile__heading text-base">Description</h4>
			<div class="tile__content text-h5">
				<p>
					Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking
					up the sun’s rays, the seed grows progressively larger.
				</p>
			</div>
			<i class="tile__icon icon icon--remix ri-double-quotes-l"></i>
			<i class="tile__icon icon icon--remix ri-double-quotes-r"></i>
		</div>
	</div>
</section>

<style>
	.tiles {
		--num-cols: 1;
		--num-rows: 6;

		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(var(--num-cols), 1fr);
		grid-template-rows: repeat(var(--num-rows), minmax(8rem, auto));

		@media (min-width: 475px) {
			--num-cols: 2;
			--num-rows: 4;
		}

		@media (min-width: 768px) {
			--num-cols: 3;
			--num-rows: 3;
		}
	}

	.tile {
		position: relative;
	}

	.tile--1 {
		display: grid;
		place-items: center;

		@media (min-width: 475px) {
			grid-column: span 2;
		}

		@media (min-width: 768px) {
			grid-column: 3 / 4;
			grid-row: 1 / 4;
		}
	}

	.tile--2 {
		@media (min-width: 768px) {
			grid-column: 1 / 2;
		}
	}

	.tile--3 {
		@media (min-width: 768px) {
			grid-column: 1 / 2;
			grid-row: 2 / 3;
		}
	}

	.tile--6 {
		@media (min-width: 475px) {
			grid-column: span 2;
		}
	}

	.tile__image {
		max-width: 80%;

		@media (min-width: 768px) {
			max-width: 100%;
		}
	}

	.tile__content {
		margin-top: 0.5em;
	}

	.tile :global(.icon) {
		--size: 2rem;
		--color: black;
	}

	:global(.tile__icon) {
		position: absolute;
		top: 0.25rem;
		right: 0.25rem;
		opacity: 0.15;
	}

	:global(.tile__icon:nth-of-type(2)) {
		bottom: 0.5rem;
		top: auto;
	}
</style>
