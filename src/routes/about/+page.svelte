<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: console.log({ data });
</script>

<p>About Page answer : {data?.answer}</p>
{#if data.countries}
	<ul>
		{#each data.countries as { flag } (flag)}
			<li>
				{flag}
			</li>
		{/each}
	</ul>
{/if}
