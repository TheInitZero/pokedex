<nav aria-label="Pagination" class="pagination">
	<div class="pagination__group card">
		<a class="pagination__link button" href="/" aria-label="Previous">
			<i class="icon icon--remix ri-arrow-left-line"></i>
		</a>
		<span>Page 12 of 100</span>
		<a class="pagination__link button" href="/" aria-label="Next">
			<i class="icon icon--remix ri-arrow-right-line"></i>
		</a>
	</div>
</nav>

<style>
	.icon {
		--size: 1.5rem;
	}

	.pagination {
		margin-top: 2em;
		display: grid;
		place-content: center;
	}

	.pagination__group {
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
		--padding-horizontal: 0.75em;
	}
</style>
