<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div>
	<p>protected</p>
	<p>Page answer : {data?.answer}</p>
	<p>page level data - {data.countries}</p>
	<p>is Logged in {$page.data.session.isAuthenticated}</p>
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
		background-color: aquamarine;
	}
</style>
