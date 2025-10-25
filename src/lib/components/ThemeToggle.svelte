<script lang="ts">
	import { untrack } from 'svelte';
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
	<i class="icon icon--remix {theme == 'light' ? 'ri-moon-fill' : 'ri-sun-fill'}"></i>
</button>

<style>
	.button {
		display: grid;
		place-content: center;
	}

	.icon {
		--size: 1.5rem;
	}
</style>
