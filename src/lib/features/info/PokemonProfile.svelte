<div class="profile">
	<div class="profile__group" aria-label="Weight">
		<i class="ri-weight-line ri-xl"></i>
		<span class="profile__stat">6.9 kg</span>
	</div>

	<div class="profile__group" aria-label="Height">
		<i class="ri-ruler-line ri-xl"></i>
		<span class="profile__stat">0.7 m</span>
	</div>
</div>

<style>
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
