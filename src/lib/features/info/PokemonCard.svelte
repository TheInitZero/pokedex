<script lang="ts">
	import PokemonTypeIcon from './PokemonTypeIcon.svelte';
	import { getImageFileName, type Pokemon } from '$lib/index';
	import RemixIcon from '$lib/components/RemixIcon.svelte';

	type Props = {
		pokemon: Pokemon;
	};

	const { pokemon }: Props = $props();
</script>

<article class="card" aria-labelledby="pokemon-name-{pokemon.id}">
	<img
		class="card__img"
		src="/assets/images/{getImageFileName(pokemon.id)}.png"
		alt=""
		height="160"
		width="160"
		loading="lazy"
	/>

	<h2 class="card__title" id="pokemon-name-{pokemon.id}">
		<a class="card__link" href="/{pokemon.id}">{pokemon.name}</a>
	</h2>

	<ul class="card__list" aria-label="{pokemon.name} belongs to the types:">
		{#each pokemon.type as pokemonType}
			<li class="card__list-item">
				<PokemonTypeIcon {pokemonType} />

				<span class="text-sm">{pokemonType}</span>
			</li>
		{/each}
	</ul>

	<div class="card__profile-group" aria-label="{pokemon.name}'s profile:">
		<div class="card__profile" aria-label="Weight">
			<RemixIcon name="ri-weight-line" --size="1.25rem" />

			<span class="text-sm">{pokemon.weight}</span>
		</div>

		<div class="card__profile" aria-label="Height">
			<RemixIcon name="ri-ruler-line" --size="1.25rem" />

			<span class="text-sm">{pokemon.height}</span>
		</div>
	</div>
</article>

<style>
	.card {
		position: relative;
		display: grid;
		gap: 0.5rem;
		justify-items: center;
	}

	.card:focus-within {
		outline: 2px dashed var(--color-secondary);
		outline-offset: 2px;
	}

	.card__img {
		--img-size: 6rem;
		inline-size: var(--img-size);
		block-size: var(--img-size);

		@media (width >= 39rem) {
			--img-size: 10rem;
		}
	}

	.card__title {
		color: var(--color-text-muted);
		font-size: var(--font-size-sm);

		@media (width >= 39rem) {
			font-size: var(--font-size-h6);
		}
	}

	.card__link {
		text-decoration: none;
	}

	.card__link:focus {
		outline: none;
	}

	.card__link::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		inline-size: 100%;
		block-size: 100%;
	}

	.card__list {
		display: none;

		@media (width >= 39rem) {
			list-style: none;
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 1rem;
		}
	}

	.card__list-item {
		background-color: var(--color-bg-light);
		color: var(--color-text);
		padding: 0.25rem;
		border-radius: 0.125rem;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
	}

	.card__profile-group {
		display: none;

		@media (width >= 39rem) {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 1rem;
		}
	}

	.card__profile {
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}
</style>
