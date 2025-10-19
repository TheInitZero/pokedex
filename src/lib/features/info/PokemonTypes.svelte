<ul class="type-list" aria-label="Bulbasaur belongs to the types:">
	<li class="type-list__item">
		<img class="type-list__icon" src="/assets/typeIcons/grass.svg" alt="" height="48" width="48" />
		<span class="type-list__name">Grass</span>
	</li>
	<li class="type-list__item">
		<img class="type-list__icon" src="/assets/typeIcons/poison.svg" alt="" height="48" width="48" />
		<span class="type-list__name">Poison</span>
	</li>
</ul>

<style>
	.type-list {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
	}

	.type-list__item {
		background-color: black;
		color: white;
		padding: 0.5em;
		border-radius: 0.5em;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.type-list__icon {
		height: 1rem;
		width: 1rem;
	}

	.type-list__name {
		font-size: var(--font-size-sm);
	}
</style>
