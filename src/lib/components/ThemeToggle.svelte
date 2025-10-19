<script>
	import { iconMoon, iconSun } from './Icons.svelte';
</script>

<button class="button" aria-pressed="false" aria-label="Dark Theme">
	{@render iconSun()}
	<!-- {@render iconMoon()} -->
</button>

<style>
	.button {
		display: grid;
		place-content: center;
		padding: 0.5em;
		border: 2px solid black;
		border-radius: 0.5em;
		background-color: black;
	}

	:global(.icon--sun, .icon--moon) {
		width: 1.5rem;
		height: 1.5rem;
		fill: white;
	}
</style>
