<script lang="ts">
	import { page } from '$app/state';
</script>

<section aria-labelledby="error-section-heading">
	<h1 id="error-section-heading">Error: {page.status}</h1>
	<p>{page.error?.message ?? 'Something went wrong'}</p>
	<a href="/">Go back to home page</a>
</section>
