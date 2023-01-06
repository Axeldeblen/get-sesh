<script lang="ts">
	import { page } from '$app/stores';
	import { login, logout } from '../utils';
	import { session } from '../stores/session';
	import type { PageData } from './$types';

	export let data: PageData;

	// hydrate session store
	// $: $session = data.session;
	$: console.log('layout here');
</script>

<hr />
<a href="/">Home</a>
<a href="/about">about</a>
<a href="/protected">protected</a>
<!-- <a href="/protected/nested">To nested protected</a> -->
<hr />
<slot />

{#if $page.error}
	<hr />
	<p>
		Error =====
		{$page.error?.message}
		=====
	</p>
{/if}

<span>answer: {data?.answer}</span>
<hr />
<button class="login" on:click={() => login()}> Login </button>
<button on:click={() => logout()}> Logout </button>

<style>
	button {
		padding: 1rem;
		background-color: goldenrod;
	}

	.login {
		background-color: aquamarine;
	}
</style>
