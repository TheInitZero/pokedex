<script lang="ts">
	import { page } from '$app/state';
</script>

<section class="error" aria-labelledby="error-section-heading">
	<h2 class="error__title" id="error-section-heading">Error: {page.status}</h2>
	<img class="error__image" src="/assets/images/404.png" alt="" height="160" width="160" />
	<p class="error__message">{page.error?.message ?? 'Something went wrong'}</p>
	<a class="error__link" href="/">Go back to home page</a>
</section>

<style>
	.error {
		margin-block-start: 1em;
		border: 2px solid black;
		padding: 1em;
		border-radius: 1em;
		margin-inline: auto;
		max-width: fit-content;
		text-align: center;
	}

	.error__message {
		margin-block-start: 0.5rem;
	}

	.error__link {
		margin-block-start: 0.5rem;
		display: inline-block;
		padding: 0.5em;
		border: 2px solid black;
		border-radius: 0.5em;
		background-color: black;
		color: white;
	}
</style>
