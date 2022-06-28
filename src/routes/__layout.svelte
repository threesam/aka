<script>
	import Nav from '$lib/components/Nav.svelte'
	import Theme from '$lib/components/Theme.svelte'
	import Footer from '$lib/components/Footer.svelte'
</script>

<Nav />

<slot />

<div>
	<Theme />
</div>

<Footer />

<style>
	div {
		position: fixed;
		z-index: 10;
		padding: 0.5rem;
		padding-bottom: 0;
		bottom: var(--containerPadding);
		right: var(--containerPadding);
		opacity: 0.8;
	}
</style>
