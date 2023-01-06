<script lang="ts">
	import { session } from '../stores/session';
	import type { PageData } from './$types';
	import { login, logout } from '../utils';

	export let data: PageData;

	$: console.log($session, data);
</script>

<div>
	<p>Home</p>
	<p>Page answer : {data?.answer}</p>
	<p>page level data - {data.countries}</p>

	<button class="login" on:click={() => login()}> Login </button>
	<button on:click={() => logout()}> Logout </button>
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
		background-color: antiquewhite;
	}
</style>
