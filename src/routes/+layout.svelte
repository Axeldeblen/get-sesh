<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';
	import cookies from 'js-cookie';
	import { session } from '../stores/session';
	import type { PageData } from './$types';

	export let data: PageData;
	const login = () => {
		cookies.set('token', '1234');
		cookies.set('isAuthenticated', true);
		console.log('login');
		invalidateAll();
	};
	const logout = () => {
		console.log('logout');
		cookies.remove('token');
		cookies.remove('isAuthenticated');
		// update seession store
		invalidateAll();
	};
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
