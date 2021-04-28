<script>
	import Nav from '../components/Nav.svelte';
	import Theme from '../components/Theme.svelte'
	import Footer from '../components/Footer.svelte'
</script>

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

<Nav />

<slot/>


<div>
	<Theme />
</div>

<Footer />