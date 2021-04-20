<style>
	main {
		position: relative;
		top: var(--headerHeight);
		min-height: calc(100vh - var(--headerHeight));
		width: 100%;
		max-width: 56em;
		margin: 0 auto;
	}
</style>

<main>
  <slot />
</main>