<script lang="ts">
	import { getImageFileName, type Pokemon } from '$lib/index';
	import PokemonTypeIcon from './PokemonTypeIcon.svelte';

	type Props = {
		pokemon: Pokemon;
	};

	const { pokemon }: Props = $props();
</script>

<section class="info-section card">
	<h3 class="info-section__title">General Info</h3>

	<div class="info">
		<div class="info-group info-group--img">
			<img
				class="info__img"
				src="/assets/images/{getImageFileName(pokemon.id)}.png"
				alt=""
				loading="lazy"
				height={16 * 16}
				width={16 * 16}
			/>
		</div>

		<section class="info-group info-group--types">
			<h4 class="text-base">Types</h4>

			<p>{pokemon.type.join(', ')}</p>

			<div class="info-group__icons">
				{#each pokemon.type as pokemonType}
					<PokemonTypeIcon {pokemonType} --pokemon-icon-size="1.25rem" />
				{/each}
			</div>
		</section>

		<section class="info-group info-group--profile">
			<h4 class="text-base">Profile</h4>

			<p>
				<span class="sr-only">Weight:</span>{pokemon.weight},

				<span class="sr-only">Height:</span>{pokemon.height}
			</p>

			<div class="info-group__icons">
				{@render iconWeight()}

				{@render iconRuler()}
			</div>
		</section>

		<section class="info-group info-group--species">
			<h4 class="text-base">Species</h4>

			<p>{pokemon.species}</p>

			<div class="info-group__icons">
				{@render iconDNA()}
			</div>
		</section>

		<section class="info-group info-group--gender">
			<h4 class="text-base">Gender Ratio</h4>

			<p>{pokemon.gender}</p>

			<div class="info-group__icons">
				{@render iconMen()}

				{@render iconWomen()}
			</div>
		</section>

		<section class="info-group info-group--description">
			<h4 class="text-base">Description</h4>

			<p>{pokemon.description}</p>

			<div class="info-group__icons">
				{@render iconStickyNote()}
			</div>
		</section>
	</div>
</section>

{#snippet iconWeight()}
	<svg
		aria-hidden="true"
		class="remix-icon"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		><path
			d="M14.0004 6C14.0004 7.10457 13.1049 8 12.0004 8C10.8958 8 10.0004 7.10457 10.0004 6C10.0004 4.89543 10.8958 4 12.0004 4C13.1049 4 14.0004 4.89543 14.0004 6ZM15.4652 8C15.8056 7.41165 16.0004 6.72857 16.0004 6C16.0004 3.79086 14.2095 2 12.0004 2C9.79122 2 8.00036 3.79086 8.00036 6C8.00036 6.72857 8.19515 7.41165 8.53549 8H5.06615C4.57888 8 4.16255 8.3512 4.08045 8.8315L2.2001 19.8315C2.0957 20.4423 2.56618 21 3.18581 21H20.8149C21.4345 21 21.905 20.4423 21.8006 19.8315L19.9203 8.8315C19.8382 8.3512 19.4218 8 18.9346 8H15.4652Z"
		></path></svg
	>
{/snippet}

{#snippet iconRuler()}
	<svg
		aria-hidden="true"
		class="remix-icon"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		><path
			d="M4.92901 13.3138L7.05033 15.4351L8.46455 14.0209L6.34323 11.8996L8.46455 9.77828L11.293 12.6067L12.7072 11.1925L9.87876 8.36407L12.0001 6.24275L14.1214 8.36407L15.5356 6.94986L13.4143 4.82853L16.2427 2.00011C16.6332 1.60958 17.2664 1.60958 17.6569 2.00011L22.6067 6.94986C22.9972 7.34038 22.9972 7.97354 22.6067 8.36407L7.75744 23.2133C7.36692 23.6038 6.73375 23.6038 6.34323 23.2133L1.39348 18.2636C1.00295 17.873 1.00295 17.2399 1.39348 16.8494L4.92901 13.3138Z"
		></path></svg
	>
{/snippet}

{#snippet iconDNA()}
	<svg
		aria-hidden="true"
		class="remix-icon"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		><path
			d="M18 1C18 1.71561 17.9359 2.37948 17.8155 3H8.23193C8.87053 5.55223 10.7943 7.22876 13.5829 9.4281C13.0772 9.8647 12.5462 10.294 12 10.7267C8.72906 8.13494 6 5.66845 6 1H4C4 6.46624 7.21013 9.46355 10.3863 12C7.21013 14.5365 4 17.5338 4 23H6C6 18.0404 9.08011 15.566 12.6178 12.7863L12.7096 12.7142C16.149 10.0123 20 6.98705 20 1H18ZM17.8155 21.0002H8.23193C8.89098 18.3663 10.9188 16.665 13.8535 14.3592C14.2973 14.0106 14.7419 13.663 15.1811 13.3086C17.7659 15.5981 20 18.44 20 23.0002H18C18 22.2846 17.9359 21.6207 17.8155 21.0002Z"
		></path></svg
	>
{/snippet}

{#snippet iconMen()}
	<svg
		aria-hidden="true"
		class="remix-icon"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		><path
			d="M18.5858 5H14V3H22V11H20V6.41421L16.4633 9.95088C17.4274 11.2127 18 12.7895 18 14.5C18 18.6421 14.6421 22 10.5 22C6.35786 22 3 18.6421 3 14.5C3 10.3579 6.35786 7 10.5 7C12.2105 7 13.7873 7.57264 15.0491 8.53666L18.5858 5Z"
		></path></svg
	>
{/snippet}

{#snippet iconWomen()}
	<svg
		aria-hidden="true"
		class="remix-icon"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		><path
			d="M11 15.9339C7.33064 15.445 4.5 12.3031 4.5 8.5C4.5 4.35786 7.85786 1 12 1C16.1421 1 19.5 4.35786 19.5 8.5C19.5 12.3031 16.6694 15.445 13 15.9339V18H18V20H13V24H11V20H6V18H11V15.9339Z"
		></path></svg
	>
{/snippet}

{#snippet iconStickyNote()}
	<svg
		aria-hidden="true"
		class="remix-icon"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		><path
			d="M15 14L14.8834 14.0067C14.4243 14.0601 14.0601 14.4243 14.0067 14.8834L14 15V21H3.99826C3.44694 21 3 20.5551 3 20.0066V3.9934C3 3.44476 3.44495 3 3.9934 3H20.0066C20.5552 3 21 3.44749 21 3.9985V14H15ZM21 16L16 20.997V16H21Z"
		></path></svg
	>
{/snippet}

<style>
	.remix-icon {
		--remix-icon-size: 1.5rem;
		opacity: 0.5;
	}

	.info-section {
		margin-block-end: 1rem;
	}

	.info-section__title {
		margin-block-end: 1rem;
	}

	.info {
		display: grid;
		gap: 1rem;

		@media (width >= 39rem) {
			grid-template-columns: repeat(2, 1fr);
		}

		@media (width >= 58rem) {
			grid-template-columns: repeat(3, 1fr);
			grid-template-rows: repeat(3, auto);
		}
	}

	.info-group {
		position: relative;
		display: grid;
		gap: 0.5rem;

		@media (width >= 39rem) {
			box-shadow: var(--shadow);
			border: 2px solid var(--color-border-muted);
			border-top-color: var(--color-highlight);
			border-radius: 0.5rem;
			background-color: var(--color-bg-light);
			padding: 1rem;
		}
	}

	.info-group__icons {
		display: none;

		@media (width >= 39rem) {
			position: absolute;
			top: 1rem;
			right: 1rem;
			display: flex;
			align-items: center;
			gap: 0.5rem;
		}
	}

	.info__img {
		inline-size: 14rem;
		block-size: 14rem;

		@media (width >= 58rem) {
			inline-size: 16rem;
			block-size: 16rem;
		}
	}

	.info-group--img {
		display: grid;
		place-content: center;

		@media (width >= 39rem) {
			grid-column: span 2;
		}

		@media (width >= 58rem) {
			grid-column: 3 / -1;
			grid-row: 1 / -1;
		}
	}

	.info-group--types {
		@media (width >= 58rem) {
			grid-column: 1 / 2;
		}
	}

	.info-group--profile {
		@media (width >= 58rem) {
			grid-column: 2 / 3;
		}
	}

	.info-group--species {
		@media (width >= 58rem) {
			grid-column: 1 / 2;
		}
	}

	.info-group--gender {
		@media (width >= 58rem) {
			grid-column: 2 / 3;
		}
	}

	.info-group--description {
		@media (width >= 39rem) {
			grid-column: span 2;
		}
	}
</style>
