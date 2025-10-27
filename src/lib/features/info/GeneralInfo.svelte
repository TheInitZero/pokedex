<script lang="ts">
	import PokemonTypeIcon from './PokemonTypeIcon.svelte';
	import { getImageFileName, type Pokemon } from '$lib/index';
	import RemixIcon from '$lib/components/RemixIcon.svelte';

	type Props = {
		pokemon: Pokemon;
	};

	const { pokemon }: Props = $props();
</script>

<section class="flow" aria-labelledby="general-info-section-heading">
	<h3 id="general-info-section-heading">General Info</h3>

	<div class="tiles">
		<div class="tile tile--1 card">
			<img
				class="tile__image"
				src="/assets/images/{getImageFileName(pokemon.id)}.png"
				alt=""
				loading="lazy"
			/>
		</div>

		<div class="tile tile--2 card">
			<h4 class="tile__heading text-base">Types</h4>
			<div class="tile__content text-h5">
				<p>{pokemon.type.join(', ')}</p>
			</div>
			{#each pokemon.type as pokemonType, index}
				<PokemonTypeIcon
					className="tile__icon {index == 1 && 'tile__icon--2'}"
					{pokemonType}
					--size="2rem"
				/>
			{/each}
		</div>

		<div class="tile tile--3 card">
			<h4 class="tile__heading text-base">Profile</h4>
			<div class="tile__content text-h5">
				<p>
					<span class="sr-only">Weight:</span>{pokemon.weight},<br />
					<span class="sr-only">Height:</span>{pokemon.height}
				</p>
			</div>
			<RemixIcon className="tile__icon tile__icon--faded" name="ri-weight-line" --size="2rem" />
			<RemixIcon
				className="tile__icon tile__icon--2 tile__icon--faded"
				name="ri-ruler-line"
				--size="2rem"
			/>
		</div>

		<div class="tile tile--4 card">
			<h4 class="tile__heading text-base">Species</h4>
			<div class="tile__content text-h5">
				<p>{pokemon.species}</p>
			</div>
			<RemixIcon className="tile__icon tile__icon--faded" name="ri-dna-line" --size="2rem" />
		</div>

		<div class="tile tile--5 card">
			<h4 class="tile__heading text-base">Gender Ratio</h4>
			<div class="tile__content text-h5">
				<p>{pokemon.gender}</p>
			</div>
			<RemixIcon className="tile__icon tile__icon--faded" name="ri-women-line" --size="2rem" />
			<RemixIcon
				className="tile__icon tile__icon--2 tile__icon--faded"
				name="ri-men-line"
				--size="2rem"
			/>
		</div>

		<div class="tile tile--6 card">
			<h4 class="tile__heading text-base">Description</h4>
			<div class="tile__content text-h5">
				<p>{pokemon.description}</p>
			</div>
			<RemixIcon className="tile__icon tile__icon--faded" name="ri-double-quotes-l" --size="2rem" />
			<RemixIcon
				className="tile__icon tile__icon--2 tile__icon--faded"
				name="ri-double-quotes-r"
				--size="2rem"
			/>
		</div>
	</div>
</section>

<style>
	.text-h5 {
		--color: var(--color-text-muted);
	}

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

	:global(.tile__icon--faded) {
		opacity: 0.4;
	}

	:global(.tile__icon) {
		position: absolute;
		top: 0.25rem;
		right: 0.25rem;
	}

	:global(.tile__icon--2) {
		bottom: 0.5rem;
		top: auto;
	}
</style>
