<script>
	import {
		iconAttack,
		iconDefense,
		iconHP,
		iconSpecialAttack,
		iconSpecialDefense,
		iconSpeed
	} from '$lib/components/Icons.svelte';
</script>

<section aria-labelledby="stats-section-heading">
	<h3 id="stats-section-heading">Stats</h3>

	<ul aria-labelledby="stats-section-heading">
		<li>
			{@render iconHP()}
			<span>HP</span>
			<span>45</span>
		</li>
		<li>
			{@render iconAttack()}
			<span>Attack</span>
			<span>49</span>
		</li>
		<li>
			{@render iconDefense()}
			<span>Defense</span>
			<span>49</span>
		</li>
		<li>
			{@render iconSpecialAttack()}
			<span>Special Attack</span>
			<span>65</span>
		</li>
		<li>
			{@render iconSpecialDefense()}
			<span>Special Defense</span>
			<span>65</span>
		</li>
		<li>
			{@render iconSpeed()}
			<span>Speed</span>
			<span>45</span>
		</li>
	</ul>
</section>
