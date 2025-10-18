<script>
	import Search from '$lib/features/search/Search.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<header class="header">
	<div class="header__row header__row--1">
		<h1 class="text-h4"><a href="/">Pokédex</a></h1>
		<ThemeToggle />
	</div>

	<div class="header__row header__row--2">
		<Search />
	</div>
</header>

<style>
	.header__row--1 {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.header__row--2 {
		padding: 1em;
		border: 2px solid black;
		border-radius: 1em;
	}
</style>
