<script>
	import { stores } from '@sapper/app';
	const { page } = stores();
	const segment = page.path
</script>

<style>
	a {
		font-weight: 100;
	}
	.active {
		font-weight: 900;
	}
</style>

<header>
	<a class="logo" aria-current="{segment === undefined ? 'page' : undefined}" href=".">threesam</a>

	<nav>
		<a rel="prefetch" class={segment === "blog" ? 'active' : ""} aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a>
		<a rel="prefetch" class={segment === "about" ? 'active' : ""} aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a>
		<a rel="prefetch" class={segment === "contact" ? 'active' : ""} aria-current="{segment === 'contact' ? 'page' : undefined}" href="contact">contact</a>
	</nav>
		
</header>