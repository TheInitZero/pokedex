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
		class="card__image"
		src="/assets/images/{getImageFileName(pokemon.id)}.png"
		alt=""
		height="160"
		width="160"
	/>

	<h2 class="card__heading text-h6" id="pokemon-name-{pokemon.id}">
		<a class="card__link" href="/{pokemon.id}">{pokemon.name}</a>
	</h2>

	<ul class="card__type-list" aria-label="{pokemon.name} belongs to the types:">
		{#each pokemon.type as pokemonType}
			<li class="card__group button">
				<PokemonTypeIcon {pokemonType} --size="1.5rem" />
				<span class="text-sm">{pokemonType}</span>
			</li>
		{/each}
	</ul>

	<div class="card__profile" aria-label="{pokemon.name}'s profile:">
		<div class="card__group" aria-label="Weight">
			<RemixIcon name="ri-weight-line" --size="1.5rem" />
			<span class="text-sm">{pokemon.weight}</span>
		</div>

		<div class="card__group" aria-label="Height">
			<RemixIcon name="ri-ruler-line" --size="1.5rem" />
			<span class="text-sm">{pokemon.height}</span>
		</div>
	</div>
</article>

<style>
	.card {
		position: relative;
		display: grid;
		justify-items: center;
		gap: 0.5rem;
		width: 280px;

		&:focus-within {
			outline: 2px dashed var(--color-secondary);
		}
	}

	.card__link {
		text-decoration: none;

		&:focus {
			outline: none;
		}
	}

	.card__link::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.card__type-list,
	.card__profile {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
	}

	.card__profile {
		gap: 1rem;
	}

	.card__group {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-weight: bold;
	}
</style>
