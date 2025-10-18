<script>
	import PokemonProfile from '$lib/features/info/PokemonProfile.svelte';
	import PokemonTypes from '$lib/features/info/PokemonTypes.svelte';
</script>

{#snippet iconDNA()}
	<svg
		aria-hidden="true"
		height="128"
		width="128"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
	>
		<path
			d="M18 1C18 1.71561 17.9359 2.37948 17.8155 3H8.23193C8.41382 3.72694 8.69997 4.38283 9.08066 5H17.1807C16.132 7.31672 14.1871 8.99371 12 10.7267C8.72906 8.13494 6 5.66845 6 1H4C4 6.46624 7.21013 9.46355 10.3863 12C7.21013 14.5365 4 17.5338 4 23H6C6 18.0404 9.08011 15.566 12.6178 12.7863L12.7096 12.7142C16.149 10.0123 20 6.98705 20 1H18ZM17.8155 21.0002H8.23193C8.41382 20.2733 8.69997 19.6174 9.08066 19.0002H17.1807C16.3939 17.262 15.1026 15.8839 13.583 14.5721C14.1162 14.1516 14.6526 13.7351 15.1811 13.3086C17.7659 15.5981 20 18.44 20 23.0002H18C18 22.2846 17.9359 21.6207 17.8155 21.0002Z"
		>
		</path>
	</svg>
{/snippet}

{#snippet iconMen()}
	<svg
		aria-hidden="true"
		height="128"
		width="128"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		><path
			d="M15.0491 8.53666L18.5858 5H14V3H22V11H20V6.41421L16.4633 9.95088C17.4274 11.2127 18 12.7895 18 14.5C18 18.6421 14.6421 22 10.5 22C6.35786 22 3 18.6421 3 14.5C3 10.3579 6.35786 7 10.5 7C12.2105 7 13.7873 7.57264 15.0491 8.53666ZM10.5 20C13.5376 20 16 17.5376 16 14.5C16 11.4624 13.5376 9 10.5 9C7.46243 9 5 11.4624 5 14.5C5 17.5376 7.46243 20 10.5 20Z"
		>
		</path>
	</svg>
{/snippet}

{#snippet iconWomen()}
	<svg
		aria-hidden="true"
		height="128"
		width="128"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		><path
			d="M11 15.9339C7.33064 15.445 4.5 12.3031 4.5 8.5C4.5 4.35786 7.85786 1 12 1C16.1421 1 19.5 4.35786 19.5 8.5C19.5 12.3031 16.6694 15.445 13 15.9339V18H18V20H13V24H11V20H6V18H11V15.9339ZM12 14C15.0376 14 17.5 11.5376 17.5 8.5C17.5 5.46243 15.0376 3 12 3C8.96243 3 6.5 5.46243 6.5 8.5C6.5 11.5376 8.96243 14 12 14Z"
		>
		</path>
	</svg>
{/snippet}

{#snippet iconHP()}
	<svg
		aria-hidden="true"
		height="128"
		width="128"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		><path
			d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"
		></path>
	</svg>
{/snippet}

{#snippet iconAttack()}
	<svg
		aria-hidden="true"
		height="128"
		width="128"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		><path
			d="M17.4563 3L20.9991 3.00335L21.001 6.52648L15.5341 11.992L18.3624 14.8207L19.7772 13.4071L21.1915 14.8213L18.7166 17.2962L21.545 20.1246L20.1308 21.5388L17.3024 18.7104L14.8275 21.1853L13.4133 19.7711L14.8269 18.3562L11.9981 15.528L9.1703 18.3558L10.5849 19.7711L9.17064 21.1853L6.69614 18.71L3.86734 21.5388L2.45312 20.1246L5.28192 17.2958L2.80668 14.8213L4.22089 13.4071L5.63477 14.8202L8.46212 11.992L3.00181 6.53118L2.99907 3L6.54506 3.00335L11.9981 8.457L17.4563 3ZM9.87612 13.406L7.04807 16.234L7.75607 16.941L10.5831 14.113L9.87612 13.406ZM19.0001 5.001H18.2831L13.4121 9.87L14.1191 10.577L19.0001 5.698V5.001ZM5.00007 5.001V5.701L16.2411 16.942L16.9482 16.2349L5.71507 5.002L5.00007 5.001Z"
		></path>
	</svg>
{/snippet}

{#snippet iconSpecialAttack()}
	<svg
		aria-hidden="true"
		height="128"
		width="128"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		><path
			d="M7.04813 13.4061L10.5831 16.9421L9.1703 18.3558L10.5849 19.7711L9.17064 21.1853L6.69614 18.71L3.86734 21.5388L2.45312 20.1246L5.28192 17.2958L2.80668 14.8213L4.22089 13.4071L5.63477 14.8202L7.04813 13.4061ZM2.99907 3L6.54506 3.00335L18.3624 14.8207L19.7772 13.4071L21.1915 14.8213L18.7166 17.2962L21.545 20.1246L20.1308 21.5388L17.3024 18.7104L14.8275 21.1853L13.4133 19.7711L14.8269 18.3562L3.00181 6.53118L2.99907 3ZM17.4563 3.0001L20.9991 3.00335L21.001 6.52648L16.9481 10.5781L13.4121 7.0431L17.4563 3.0001Z"
		></path>
	</svg>
{/snippet}

{#snippet iconDefense()}
	<svg
		aria-hidden="true"
		height="128"
		width="128"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		><path
			d="M3.78307 2.82598L12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598ZM5 4.60434V13.7889C5 15.1263 5.6684 16.3752 6.7812 17.1171L12 20.5963L17.2188 17.1171C18.3316 16.3752 19 15.1263 19 13.7889V4.60434L12 3.04879L5 4.60434Z"
		></path>
	</svg>
{/snippet}

{#snippet iconSpecialDefense()}
	<svg
		aria-hidden="true"
		height="128"
		width="128"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		><path
			d="M3.78307 2.82598L12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598Z"
		></path>
	</svg>
{/snippet}

{#snippet iconSpeed()}
	<svg
		aria-hidden="true"
		height="128"
		width="128"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		><path
			d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM15.8329 7.33748C16.0697 7.17128 16.3916 7.19926 16.5962 7.40381C16.8002 7.60784 16.8267 7.92955 16.6587 8.16418C14.479 11.2095 13.2796 12.8417 13.0607 13.0607C12.4749 13.6464 11.5251 13.6464 10.9393 13.0607C10.3536 12.4749 10.3536 11.5251 10.9393 10.9393C11.3126 10.5661 12.9438 9.36549 15.8329 7.33748ZM17.5 11C18.0523 11 18.5 11.4477 18.5 12C18.5 12.5523 18.0523 13 17.5 13C16.9477 13 16.5 12.5523 16.5 12C16.5 11.4477 16.9477 11 17.5 11ZM6.5 11C7.05228 11 7.5 11.4477 7.5 12C7.5 12.5523 7.05228 13 6.5 13C5.94772 13 5.5 12.5523 5.5 12C5.5 11.4477 5.94772 11 6.5 11ZM8.81802 7.40381C9.20854 7.79433 9.20854 8.4275 8.81802 8.81802C8.4275 9.20854 7.79433 9.20854 7.40381 8.81802C7.01328 8.4275 7.01328 7.79433 7.40381 7.40381C7.79433 7.01328 8.4275 7.01328 8.81802 7.40381ZM12 5.5C12.5523 5.5 13 5.94772 13 6.5C13 7.05228 12.5523 7.5 12 7.5C11.4477 7.5 11 7.05228 11 6.5C11 5.94772 11.4477 5.5 12 5.5Z"
		></path>
	</svg>
{/snippet}

<svelte:head>
	<title>Bulbasaur | Pokédex</title>
</svelte:head>

<h2>Bulbasaur</h2>

<div>
	<img src="/assets/images/001.png" alt="" height="240" width="240" />
</div>

<section aria-labelledby="general-info-section-heading">
	<h3 id="general-info-section-heading">General Info</h3>

	<PokemonTypes />

	<PokemonProfile />

	<div aria-label="Species">
		{@render iconDNA()}
		<span>Seed Pokémon</span>
	</div>

	<div aria-label="Gender Ratio">
		{@render iconMen()}
		<span>87.5 : 12.5</span>
		{@render iconWomen()}
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
