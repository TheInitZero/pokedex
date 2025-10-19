{#snippet iconLeftArrow()}
	<svg
		class="icon"
		aria-hidden="true"
		height="128"
		width="128"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
	>
		<path d="M12 13V20L4 12L12 4V11H20V13H12Z"></path>
	</svg>
{/snippet}

{#snippet iconRightArrow()}
	<svg
		class="icon"
		aria-hidden="true"
		height="128"
		width="128"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
	>
		<path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path>
	</svg>
{/snippet}

<nav aria-label="Pagination" class="pagination">
	<div class="pagination__group">
		<a class="pagination__link" href="/" aria-label="Previous">{@render iconLeftArrow()}</a>
		<span>Page 12 of 100</span>
		<a class="pagination__link" href="/" aria-label="Next">{@render iconRightArrow()}</a>
	</div>
</nav>

<style>
	.icon {
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
