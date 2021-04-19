<script>
	import Nav from '../components/Nav.svelte';

</script>

<style>
	main {
		position: relative;
		top: var(--headerHeight);
		padding: 3rem var(--containerPadding) 0 var(--containerPadding);
		max-width: 56em;
		margin: 0 auto;
	}
</style>

<Nav />

<main>
	<slot/>
</main>