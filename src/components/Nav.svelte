<script>
	import { stores } from '@sapper/app';
	const { page } = stores();
	$: segment = $page.path.substring(1)
</script>

<style>
	a {
		font-weight: normal;
		transition: all 0.3s ease-in-out;
	}
	span {
		color: var(--primary);
	}
	.active {
		color: var(--primary);
	}
</style>

<header>
	<a class="logo" aria-current="{segment === undefined ? 'page' : undefined}" href=".">Art<span>Killing</span>Apathy</a>

	<nav>
		<a rel="prefetch" class={segment === "art" ? 'active' : ""} aria-current="{segment === 'art' ? 'page' : undefined}" href="art">art</a>
		<a rel="prefetch" class={segment === "about" ? 'active' : ""} aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a>
		<a rel="prefetch" class={segment === "contact" ? 'active' : ""} aria-current="{segment === 'contact' ? 'page' : undefined}" href="contact">contact</a>
	</nav>
		
</header>
