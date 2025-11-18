<script lang="ts">
	import { page } from '$app/state';
</script>

<section class="error card" aria-labelledby="error-title">
	<h2 class="error__title text-h5" id="error-title">Error: {page.status}</h2>

	<img src="/assets/images/404.png" alt="" height="160" width="160" loading="lazy" />

	<p>{page.error?.message ?? 'Something went wrong'}</p>

	<a class="button" href="/">Home</a>
</section>

<style>
	.error {
		margin-inline: auto;
		max-inline-size: 20rem;
		display: grid;
		gap: 0.5rem;
		justify-items: center;
	}

	.button {
		--background-color: var(--color-bg-light);
	}
</style>
