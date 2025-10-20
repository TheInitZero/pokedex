<script>
	import PokemonTypeIcon from './PokemonTypeIcon.svelte';
</script>

<section class="section" aria-labelledby="general-info-section-heading">
	<h3 id="general-info-section-heading">General Info</h3>

	<div class="tiles">
		<div class="tile tile--1">
			<img class="tile__image" src="/assets/images/001.png" alt="" height="240" width="240" />
		</div>

		<div class="tile tile--2">
			<h4 class="tile__heading text-base">Types</h4>
			<div class="tile__content text-h5">
				<p>Grass, Poison</p>
			</div>
			<PokemonTypeIcon className={'tile__icon tile__icon--type'} pokemonType="Grass" />
			<PokemonTypeIcon className={'tile__icon tile__icon--type'} pokemonType="Poison" />
		</div>

		<div class="tile tile--3">
			<h4 class="tile__heading text-base">Profile</h4>
			<div class="tile__content text-h5">
				<p>6.9 kg,<br /> 0.7 m</p>
			</div>
			<i class="tile__icon ri-weight-line"></i>
			<i class="tile__icon ri-ruler-line"></i>
		</div>

		<div class="tile tile--4">
			<h4 class="tile__heading text-base">Species</h4>
			<div class="tile__content text-h5">
				<p>Seed Pokémon</p>
			</div>
			<i class="tile__icon ri-dna-line"></i>
		</div>

		<div class="tile tile--5">
			<h4 class="tile__heading text-base">Gender Ratio</h4>
			<div class="tile__content text-h5">
				<p>87.5 : 12.5</p>
			</div>
			<i class="tile__icon ri-women-line"></i>
			<i class="tile__icon ri-men-line"></i>
		</div>

		<div class="tile tile--6">
			<h4 class="tile__heading text-base">Description</h4>
			<div class="tile__content text-h5">
				<p>
					Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking
					up the sun’s rays, the seed grows progressively larger.
				</p>
			</div>
			<i class="tile__icon ri-double-quotes-l"></i>
			<i class="tile__icon ri-double-quotes-r"></i>
		</div>
	</div>
</section>

<style>
	.section {
		margin-top: 1em;
	}

	.tiles {
		margin-top: 1em;
		display: grid;
		gap: 1rem;
		grid-template-rows: repeat(6, minmax(8rem, auto));

		@media (min-width: 475px) {
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(4, minmax(8rem, auto));
		}

		@media (min-width: 768px) {
			grid-template-columns: repeat(3, 1fr);
			grid-template-rows: repeat(3, minmax(8rem, auto));
		}
	}

	.tile {
		position: relative;
		border: 2px solid black;
		padding: 1em;
		border-radius: 1em;
	}

	.tile--1 {
		display: grid;
		place-content: center;

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
		height: 10rem;
		width: 10rem;

		@media (min-width: 640px) {
			height: 15rem;
			width: 15rem;
		}
	}

	.tile__content {
		margin-top: 0.5rem;
	}

	:global(.tile__icon) {
		font-size: 2rem;
		position: absolute;
		top: 0.25rem;
		right: 0.25rem;
		color: black;
		opacity: 0.15;
	}

	:global(.tile__icon--type) {
		height: 2rem;
		width: 2rem;
	}

	:global(.tile__icon:nth-of-type(2)) {
		bottom: 0.5rem;
		top: auto;
	}
</style>
