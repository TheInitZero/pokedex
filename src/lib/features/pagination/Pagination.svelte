<nav aria-label="Pagination" class="pagination">
	<div class="pagination__group">
		<a class="pagination__link" href="/" aria-label="Previous">
			<i class="icon ri-arrow-left-line ri-xl"></i>
		</a>
		<span>Page 12 of 100</span>
		<a class="pagination__link" href="/" aria-label="Next">
			<i class="icon ri-arrow-right-line ri-xl"></i>
		</a>
	</div>
</nav>

<style>
	.icon {
		color: white;
	}

	.pagination {
		margin-top: 2em;
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
		padding: 0.75em 0.5em;
		border-radius: 0.5em;
		display: grid;
		place-content: center;
	}
</style>
