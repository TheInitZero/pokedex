<script>
	import { iconHeight, iconWeight } from '$lib/components/Icons.svelte';
</script>

<div class="profile">
	<div class="profile__group" aria-label="Weight">
		{@render iconWeight()}
		<span class="profile__stat">6.9 kg</span>
	</div>

	<div class="profile__group" aria-label="Height">
		{@render iconHeight()}
		<span class="profile__stat">0.7 m</span>
	</div>
</div>

<style>
	:global(.icon--weight, .icon--height) {
		height: 1.5rem;
		width: 1.5rem;
	}

	.profile {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
	}

	.profile__group {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.profile__stat {
		font-size: var(--font-size-sm);
		font-weight: bold;
	}
</style>
