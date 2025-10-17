<script>
	import Search from '$lib/features/search/Search.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<header>
	<div>
		<h1><a href="/">Pokédex</a></h1>
		<ThemeToggle />
	</div>

	<div>
		<Search />
	</div>
</header>
