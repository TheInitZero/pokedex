<script>
	import ThemeToggle from './ThemeToggle.svelte';
	import Search from '$lib/features/search/Search.svelte';
</script>

<header class="header">
	<div class="header__row">
		<h1 class="text-h4"><a href="/">Pokédex</a></h1>

		<ThemeToggle />
	</div>

	<Search />
</header>

<style>
	.header {
		margin-block-end: 1rem;
	}

	.header__row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-block-end: 1rem;
	}
</style>
