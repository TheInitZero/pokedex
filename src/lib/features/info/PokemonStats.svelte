<script lang="ts">
	import { type Pokemon } from '$lib/index';
	import type { Snippet } from 'svelte';

	type Props = {
		pokemon: Pokemon;
	};

	const { pokemon }: Props = $props();
</script>

<section class="stats-section card" aria-hidden={pokemon.hp == null}>
	<h3 class="stats-section__title">Stats</h3>

	<div class="stats">
		{@render stat({ name: 'HP', points: pokemon['hp'], icon: iconHeart })}

		{@render stat({ name: 'Attack', points: pokemon['attack'], icon: iconSword })}

		{@render stat({ name: 'Defense', points: pokemon['defense'], icon: iconShield })}

		{@render stat({
			name: 'Special Attack',
			points: pokemon['special attack'],
			icon: iconSwordFill
		})}

		{@render stat({
			name: 'Special Defense',
			points: pokemon['special defense'],
			icon: iconShieldFill
		})}

		{@render stat({ name: 'Speed', points: pokemon['speed'], icon: iconSpeed })}
	</div>
</section>

{#snippet stat({ name, points, icon }: { name: string; points?: number; icon: Snippet<[]> })}
	<section class="stat card">
		<h4 class="text-base">{name}</h4>

		<p>{points ?? '?'}</p>

		<div class="stat__icon">
			{@render icon()}
		</div>
	</section>
{/snippet}

{#snippet iconHeart()}
	<svg
		aria-hidden="true"
		class="remix-icon"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		><path
			d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"
		></path></svg
	>
{/snippet}

{#snippet iconSword()}
	<svg
		aria-hidden="true"
		class="remix-icon"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		><path
			d="M17.4563 3L20.9991 3.00335L21.001 6.52648L15.5341 11.992L18.3624 14.8207L19.7772 13.4071L21.1915 14.8213L18.7166 17.2962L21.545 20.1246L20.1308 21.5388L17.3024 18.7104L14.8275 21.1853L13.4133 19.7711L14.8269 18.3562L11.9981 15.528L9.1703 18.3558L10.5849 19.7711L9.17064 21.1853L6.69614 18.71L3.86734 21.5388L2.45312 20.1246L5.28192 17.2958L2.80668 14.8213L4.22089 13.4071L5.63477 14.8202L8.46212 11.992L3.00181 6.53118L2.99907 3L6.54506 3.00335L11.9981 8.457L17.4563 3ZM9.87612 13.406L7.04807 16.234L7.75607 16.941L10.5831 14.113L9.87612 13.406ZM19.0001 5.001H18.2831L13.4121 9.87L14.1191 10.577L19.0001 5.698V5.001ZM5.00007 5.001V5.701L16.2411 16.942L16.9482 16.2349L5.71507 5.002L5.00007 5.001Z"
		></path></svg
	>
{/snippet}

{#snippet iconShield()}
	<svg
		aria-hidden="true"
		class="remix-icon"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		><path
			d="M3.78307 2.82598L12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598ZM5 4.60434V13.7889C5 15.1263 5.6684 16.3752 6.7812 17.1171L12 20.5963L17.2188 17.1171C18.3316 16.3752 19 15.1263 19 13.7889V4.60434L12 3.04879L5 4.60434Z"
		></path></svg
	>
{/snippet}

{#snippet iconSwordFill()}
	<svg
		aria-hidden="true"
		class="remix-icon"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		><path
			d="M7.04813 13.4061L10.5831 16.9421L9.1703 18.3558L10.5849 19.7711L9.17064 21.1853L6.69614 18.71L3.86734 21.5388L2.45312 20.1246L5.28192 17.2958L2.80668 14.8213L4.22089 13.4071L5.63477 14.8202L7.04813 13.4061ZM2.99907 3L6.54506 3.00335L18.3624 14.8207L19.7772 13.4071L21.1915 14.8213L18.7166 17.2962L21.545 20.1246L20.1308 21.5388L17.3024 18.7104L14.8275 21.1853L13.4133 19.7711L14.8269 18.3562L3.00181 6.53118L2.99907 3ZM17.4563 3.0001L20.9991 3.00335L21.001 6.52648L16.9481 10.5781L13.4121 7.0431L17.4563 3.0001Z"
		></path></svg
	>
{/snippet}

{#snippet iconShieldFill()}
	<svg
		aria-hidden="true"
		class="remix-icon"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		><path
			d="M3.78307 2.82598L12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598Z"
		></path></svg
	>
{/snippet}

{#snippet iconSpeed()}
	<svg
		aria-hidden="true"
		class="remix-icon"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		><path
			d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM12 5C13.018 5 13.9852 5.21731 14.8579 5.60806L13.2954 7.16944C12.8822 7.05892 12.448 7 12 7C9.23858 7 7 9.23858 7 12C7 13.3807 7.55964 14.6307 8.46447 15.5355L7.05025 16.9497L6.89445 16.7889C5.71957 15.5368 5 13.8525 5 12C5 8.13401 8.13401 5 12 5ZM18.3924 9.14312C18.7829 10.0155 19 10.9824 19 12C19 13.933 18.2165 15.683 16.9497 16.9497L15.5355 15.5355C16.4404 14.6307 17 13.3807 17 12C17 11.552 16.9411 11.1178 16.8306 10.7046L18.3924 9.14312ZM16.2426 6.34315L17.6569 7.75736L13.9325 11.483C13.9765 11.6479 14 11.8212 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C12.1788 10 12.3521 10.0235 12.517 10.0675L16.2426 6.34315Z"
		></path></svg
	>
{/snippet}

<style>
	.remix-icon {
		--remix-icon-size: 1.5rem;
		opacity: 0.5;

		@media (width >= 39rem) {
			--remix-icon-size: 2rem;
		}
	}

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
		position: relative;
		padding: 0.5rem;
		background-color: var(--color-bg-light);
		display: grid;
		gap: 0.5rem;

		@media (width >= 39rem) {
			padding: 1rem;
		}
	}

	.stat__icon {
		position: absolute;
		bottom: 0.5rem;
		right: 0.5rem;
		display: grid;
		place-content: center;

		@media (width >= 39rem) {
			bottom: 1rem;
			right: 1rem;
		}
	}
</style>
