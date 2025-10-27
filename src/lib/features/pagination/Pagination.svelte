<script lang="ts">
	import type { PokemonType } from '$lib';
	import RemixIcon from '$lib/components/RemixIcon.svelte';

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
			<RemixIcon name="ri-arrow-left-line" --size="1.5rem" />
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
			<RemixIcon name="ri-arrow-right-line" --size="1.5rem" />
		</a>
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

		&[aria-disabled='true'] {
			opacity: 50%;
			pointer-events: none;
		}
	}

	.button {
		--padding-horizontal: 0.75em;
		--background-color: var(--color-bg-light);
	}
</style>
