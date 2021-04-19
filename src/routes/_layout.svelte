<script>
	import Nav from '../components/Nav.svelte';

</script>

<style>
	main {
		position: relative;
		top: var(--headerHeight);
		width: 100%;
		max-width: 56em;
		margin: 0 auto;
	}
</style>

<Nav />

<main>
	<slot/>
</main>