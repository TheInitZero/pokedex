<section class="section" aria-labelledby="stats-section-heading">
	<h3 id="stats-section-heading">Stats</h3>

	<ul class="stats" aria-labelledby="stats-section-heading">
		<li class="stat">
			<h4 class="stat__heading text-base">HP</h4>
			<p class="stat__point text-h5">45</p>
			<i class="stat__icon ri-heart-line"></i>
		</li>
		<li class="stat">
			<h4 class="stat__heading text-base">Attack</h4>
			<p class="stat__point text-h5">49</p>
			<i class="stat__icon ri-sword-line"></i>
		</li>
		<li class="stat">
			<h4 class="stat__heading text-base">Defense</h4>
			<p class="stat__point text-h5">49</p>
			<i class="stat__icon ri-shield-line"></i>
		</li>
		<li class="stat">
			<h4 class="stat__heading text-base">Special Attack</h4>
			<p class="stat__point text-h5">65</p>
			<i class="stat__icon ri-sword-fill"></i>
		</li>
		<li class="stat">
			<h4 class="stat__heading text-base">Special Defense</h4>
			<p class="stat__point text-h5">65</p>
			<i class="stat__icon ri-shield-fill"></i>
		</li>
		<li class="stat">
			<h4 class="stat__heading text-base">Speed</h4>
			<p class="stat__point text-h5">45</p>
			<i class="stat__icon ri-dashboard-3-line"></i>
		</li>
	</ul>
</section>

<style>
	.section {
		margin-block-start: 1em;
	}

	.stats {
		margin-block-start: 1em;
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(2, 1fr);

		@media (min-width: 768px) {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	.stat {
		position: relative;
		list-style-type: none;
		display: grid;
		padding: 1em;
		border: 2px solid black;
		border-radius: 1em;
	}

	.stat__point {
		margin-block-start: 0.5rem;
	}

	.stat__icon {
		font-size: 2.5rem;
		position: absolute;
		bottom: 0.25rem;
		right: 0.25rem;
		opacity: 0.15;

		@media (min-width: 640px) {
			font-size: 3rem;
		}
	}
</style>
