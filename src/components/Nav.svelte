<script>
	import { stores } from '@sapper/app';
	const { page } = stores();
	const segment = page.path
</script>

<style>
	a {
		font-weight: 100;
	}
	span {
		color: var(--primary);
	}
	.active {
		font-weight: 900;
	}
</style>

<header>
	<a class="logo" aria-current="{segment === undefined ? 'page' : undefined}" href=".">Art<span>Killing</span>Apathy</a>

	<nav>
		<a rel="prefetch" class={segment === "posts" ? 'active' : ""} aria-current="{segment === 'posts' ? 'page' : undefined}" href="posts">posts</a>
		<a rel="prefetch" class={segment === "about" ? 'active' : ""} aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a>
		<a rel="prefetch" class={segment === "contact" ? 'active' : ""} aria-current="{segment === 'contact' ? 'page' : undefined}" href="contact">contact</a>
	</nav>
		
</header>