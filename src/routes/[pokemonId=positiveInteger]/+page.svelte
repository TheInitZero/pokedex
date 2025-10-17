<script lang="ts">
	import { page } from '$app/state';

	$inspect(page);

	/*
    "1": {
		"id": 1,
		"name": "Bulbasaur",
		"type": ["Grass", "Poison"],
		"hp": 45,
		"attack": 49,
		"defense": 49,
		"special attack": 65,
		"special defense": 65,
		"speed": 45,
		"species": "Seed Pokémon",
		"description": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun’s rays, the seed grows progressively larger.",
		"height": "0.7 m",
		"weight": "6.9 kg",
		"gender": "87.5:12.5"
	}
    */
</script>

<svelte:head>
	<title>Bulbasaur | Pokédex</title>
</svelte:head>

<h2>Bulbasaur</h2>

<div>
	<img src="/assets/images/001.png" alt="" height="240" width="240" />
</div>

<section aria-labelledby="general-info-section-heading">
	<h3 id="general-info-section-heading">General Info</h3>

	<ul aria-label="Bulbasaur belongs to the types:">
		<li>Grass</li>
		<li>Poison</li>
	</ul>

	<div>
		<div aria-label="Weight">
			<span>6.9 kg</span>
		</div>

		<div aria-label="Height">
			<span>0.7 m</span>
		</div>
	</div>

	<div>
		<p>Species: Seed Pokémon</p>
		<p>Gender Ratio: 87.5:12.5</p>
	</div>

	<div>
		<p>
			Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up
			the sun’s rays, the seed grows progressively larger.
		</p>
	</div>
</section>

<section aria-labelledby="stats-section-heading">
	<h3 id="stats-section-heading">Stats</h3>

	<ul aria-labelledby="stats-section-heading">
		<li>
			<span>HP</span>
			<span>45</span>
		</li>
		<li>
			<span>Attack</span>
			<span>49</span>
		</li>
		<li>
			<span>Defense</span>
			<span>49</span>
		</li>
		<li>
			<span>Special Attack</span>
			<span>65</span>
		</li>
		<li>
			<span>Special Defense</span>
			<span>65</span>
		</li>
		<li>
			<span>Speed</span>
			<span>45</span>
		</li>
	</ul>
</section>
