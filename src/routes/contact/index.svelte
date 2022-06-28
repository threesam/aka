<script>
	import { onMount } from 'svelte'
	import Contact from '$lib/components/Contact.svelte'
	import SEO from '$lib/components/SEO.svelte'

	// ssr p5 sketch
	import sketch from './sketch.js'
	let P5Sketch
	onMount(async () => {
		const mod = await import('$lib/components/CanvasP5.svelte')
		P5Sketch = mod.default
	})
</script>

<SEO title="Contact" description="Social links and contact form for Threesam" />

<main>
	<section>
		<Contact />
		<svelte:component this={P5Sketch} {sketch} id=" contact-sketch" />
	</section>
</main>

<style>
	section {
		display: grid;
		place-content: center;
		height: 100vh;
		width: 100%;
		position: relative;
		overflow: hidden;
	}
</style>
