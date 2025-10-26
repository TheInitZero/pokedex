<script lang="ts">
	import { untrack } from 'svelte';
	import RemixIcon from './RemixIcon.svelte';
	let theme = $state<'light' | 'dark'>('light');

	$effect(function onMount() {
		untrack(function getTheme() {
			return theme;
		});

		const storedTheme = localStorage.getItem('theme');

		if (storedTheme == 'light' || storedTheme == 'dark') {
			theme = storedTheme;
		} else {
			theme = 'light';
			localStorage.setItem('theme', 'light');
		}
	});

	$effect(function sideEffects() {
		document.documentElement.dataset.theme = theme;
		localStorage.setItem('theme', theme);
	});

	function toggle() {
		theme = theme == 'light' ? 'dark' : 'light';
	}
</script>

<button onclick={toggle} class="button" aria-pressed={theme == 'dark'} aria-label="Dark Theme">
	<RemixIcon name={theme == 'light' ? 'ri-moon-fill' : 'ri-sun-fill'} --size="1.5rem" />
</button>

<style>
	.button {
		display: grid;
		place-content: center;
	}
</style>
