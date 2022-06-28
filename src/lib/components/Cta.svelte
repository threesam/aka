<script>
	import { page } from '$app/stores'

	export let url, text, external, secondary, slug
</script>

<p
	class="umami--click--{secondary ? 'secondary-cta' : 'cta'}{$page.params
		.pathname !== '/'
		? `-${$page.params.pathname.substring(1).replace(/\//, '-')}`
		: '-home'}{slug ? `-${slug.current || slug}` : ''}"
>
	<a
		class={secondary ? 'cta secondary' : 'cta'}
		role="button"
		target={external ? '_blank' : ''}
		rel="noopener"
		href={url}>{text}</a
	>
</p>

<style>
	a {
		display: inline-block;
		text-decoration: none;
		background: var(--primary);
		color: var(--background);
		font-family: var(--headingFont);
		padding: 5px 13px;
		border: 0.125rem solid var(--primary);
		transition: all 0.3s ease-in-out;
	}

	a:hover {
		transform: scale(0.98);
	}

	.secondary {
		background: none;
		color: var(--textColor);
		border: 0.125rem solid transparent;
	}

	.secondary:hover {
		color: var(--primary);
	}
</style>
