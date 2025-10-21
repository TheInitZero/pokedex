<script lang="ts">
	import { page } from '$app/state';
</script>

<section class="error card flow" aria-labelledby="error-section-heading">
	<h2 class="error__title" id="error-section-heading">Error: {page.status}</h2>
	<img class="error__image" src="/assets/images/404.png" alt="" height="160" width="160" />
	<p class="error__message">{page.error?.message ?? 'Something went wrong'}</p>
	<a class="error__link button" href="/">Go back to home page</a>
</section>

<style>
	.error {
		margin: 1em auto 0 auto;
		max-width: fit-content;
		text-align: center;
	}
</style>
