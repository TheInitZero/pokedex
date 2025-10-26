<script lang="ts">
	import RemixIcon from '$lib/components/RemixIcon.svelte';

	type Props = {
		currentPage: number;
		lastPage: number;
		goToPrevPage: () => void;
		goToNextPage: () => void;
		prevButtonDisabled: boolean;
		nextButtonDisabled: boolean;
	};

	const {
		currentPage,
		lastPage,
		goToNextPage,
		goToPrevPage,
		prevButtonDisabled,
		nextButtonDisabled
	}: Props = $props();
</script>

<nav aria-label="Pagination" class="pagination">
	<div class="pagination__group card">
		<button
			disabled={prevButtonDisabled}
			onclick={goToPrevPage}
			class="pagination__link button"
			aria-label="Previous"
		>
			<RemixIcon name="ri-arrow-left-line" --size="1.5rem" />
		</button>

		<span>Page {currentPage} of {lastPage}</span>

		<button
			disabled={nextButtonDisabled}
			onclick={goToNextPage}
			class="pagination__link button"
			aria-label="Next"
		>
			<RemixIcon name="ri-arrow-right-line" --size="1.5rem" />
		</button>
	</div>
</nav>

<style>
	.pagination {
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
		--background-color: var(--color-bg-light);
	}
</style>
