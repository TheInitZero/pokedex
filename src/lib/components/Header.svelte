<script>
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<header class="header">
	<h1 class="text-h4"><a href="/">Pokédex</a></h1>
	<ThemeToggle />
</header>

<style>
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>
