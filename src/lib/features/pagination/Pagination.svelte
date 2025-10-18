{#snippet iconLeftArrow()}
	<svg
		aria-hidden="true"
		height="24"
		width="24"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
	>
		<path d="M12 13V20L4 12L12 4V11H20V13H12Z"></path>
	</svg>
{/snippet}

{#snippet iconRightArrow()}
	<svg
		aria-hidden="true"
		height="24"
		width="24"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
	>
		<path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path>
	</svg>
{/snippet}

<nav aria-label="Pagination">
	<a href="/" aria-label="Previous">{@render iconLeftArrow()}</a>
	<span>Page 12 of 100</span>
	<a href="/" aria-label="Next">{@render iconRightArrow()}</a>
</nav>
