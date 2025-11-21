<script lang="ts">
	import type { PokemonType } from '$lib';

	type Props = {
		currentPage: number;
		totalPages: number;
		searchName: string;
		searchType: PokemonType;
	};

	const { totalPages, searchName, searchType, currentPage }: Props = $props();

	function preparePageLink(page: number) {
		return `/?search-name=${searchName}&search-type=${searchType}&page=${page}`;
	}
</script>

<nav aria-label="Pagination" class="pagination">
	<div class="pagination__group card">
		<a
			aria-disabled={currentPage - 1 < 1}
			href={currentPage - 1 >= 1 ? preparePageLink(currentPage - 1) : preparePageLink(currentPage)}
			class="pagination__link button"
			aria-label="Previous"
		>
			{@render iconArrowLeft()}
		</a>

		<span>Page {currentPage} of {totalPages}</span>

		<a
			aria-disabled={currentPage + 1 > totalPages}
			href={currentPage + 1 <= totalPages
				? preparePageLink(currentPage + 1)
				: preparePageLink(currentPage)}
			class="pagination__link button"
			aria-label="Next"
		>
			{@render iconArrowRight()}
		</a>
	</div>
</nav>

{#snippet iconArrowLeft()}
	<svg class="remix-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
		><path
			d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"
		></path></svg
	>
{/snippet}

{#snippet iconArrowRight()}
	<svg class="remix-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
		><path
			d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
		></path></svg
	>
{/snippet}

<style>
	.remix-icon {
		--remix-icon-size: 1.5rem;
		--remix-icon-color: var(--color-text);
	}

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

		&[aria-disabled='true'] {
			opacity: 50%;
			pointer-events: none;
		}
	}

	.button {
		background-color: var(--color-bg-light);
	}
</style>
