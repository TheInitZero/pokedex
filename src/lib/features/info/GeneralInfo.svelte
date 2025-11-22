<script lang="ts">
	import { getImageFileName, type Pokemon } from '$lib/index';

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
		</section>

		<section class="info-group info-group--profile">
			<h4 class="text-base">Profile</h4>

			<p>
				<span class="sr-only">Weight:</span>{pokemon.weight},

				<span class="sr-only">Height:</span>{pokemon.height}
			</p>
		</section>

		<section class="info-group info-group--species">
			<h4 class="text-base">Species</h4>

			<p>{pokemon.species}</p>
		</section>

		<section class="info-group info-group--gender">
			<h4 class="text-base">Gender Ratio</h4>

			<p>{pokemon.gender}</p>
		</section>

		<section class="info-group info-group--description">
			<h4 class="text-base">Description</h4>

			<p>{pokemon.description}</p>
		</section>
	</div>
</section>

<style>
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
