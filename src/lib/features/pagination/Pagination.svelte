<script>
	import { iconLeftArrow, iconRightArrow } from '$lib/components/Icons.svelte';
</script>

<nav aria-label="Pagination" class="pagination">
	<div class="pagination__group">
		<a class="pagination__link" href="/" aria-label="Previous">{@render iconLeftArrow()}</a>
		<span>Page 12 of 100</span>
		<a class="pagination__link" href="/" aria-label="Next">{@render iconRightArrow()}</a>
	</div>
</nav>

<style>
	:global(.icon--left-arrow, .icon--right-arrow) {
		height: 1.5rem;
		width: 1.5rem;
		fill: white;
	}

	.pagination {
		margin-block-start: 2em;
		display: grid;
		place-content: center;
	}

	.pagination__group {
		border: 2px solid black;
		padding: 1em;
		border-radius: 1em;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
	}

	.pagination__link {
		border: 2px solid black;
		background-color: black;
		padding: 0.5em;
		border-radius: 0.5em;
		display: grid;
		place-content: center;
	}
</style>
