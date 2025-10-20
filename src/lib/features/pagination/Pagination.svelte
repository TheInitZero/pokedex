<nav aria-label="Pagination" class="pagination">
	<div class="pagination__group">
		<a class="pagination__link button" href="/" aria-label="Previous">
			<i class="icon ri-arrow-left-line ri-xl"></i>
		</a>
		<span>Page 12 of 100</span>
		<a class="pagination__link button" href="/" aria-label="Next">
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
		display: grid;
		place-content: center;
		text-decoration: none;
	}

	.button {
		--padding-vertical: 0.75em;
	}
</style>
