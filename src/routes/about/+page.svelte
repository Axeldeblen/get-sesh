<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div>
	<p>About</p>
	<p>Page answer : {data?.answer}</p>
	<p>page level data - {data.countries}</p>
</div>

<!-- {#if data.countries}
	<ul>
		{#each data.countries as { flag } (flag)}
			<li>
				{flag}
			</li>
		{/each}
	</ul>
{/if} -->
<style>
	div {
		background-color: burlywood;
	}
</style>
