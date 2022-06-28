<script>
	export let data
	export let i = 0
	const { slug, title, image: src, alt, excerpt, publishedAt } = data

	import { fly } from 'svelte/transition'
	import imageBuilder from '../utils/imageUrlBuilder'
	import SplashFilter from './SplashFilter.svelte'
	import { splashMulti } from '../utils/store'
	import { page } from '$app/stores'
	import { format, parseISO } from 'date-fns'

	let width
	let height

	function parentWidth(node) {
		width = node.parentElement.clientWidth
		height = node.parentElement.clientHeight
	}
</script>

<li in:fly={{ y: 25, delay: i * 100, duration: 600 }}>
	<a
		style={`height: ${height}px;`}
		rel="prefetch"
		href="{$page.url.pathname}/{slug}"
	>
		<div>
			<h2>{title}</h2>
			{#if excerpt}
				<p class="excerpt">{excerpt}</p>
			{/if}
			{#if publishedAt}
				<p class="date">
					<em>{format(parseISO(publishedAt), 'yyyy-MM-dd')}</em>
				</p>
			{/if}
		</div>
		<img
			{width}
			{height}
			use:parentWidth
			src={imageBuilder(src).width(width).height(height).auto('format').url()}
			{alt}
			loading="lazy"
		/>
		<SplashFilter />
	</a>
</li>

<style>
	li {
	}
	a {
		display: block;
		position: relative;
		width: 100%;
		margin-bottom: 3rem;
		box-shadow: var(--level-2);
		transition: all 0.3s ease-in-out;
		border-bottom: none;
		border: 0.125rem solid var(--secondaryBg);
		overflow: hidden;
	}
	a:hover {
		box-shadow: var(--level-3);
	}
	h2 {
		font-size: var(--h4);
		padding: 0;
		margin: 0;
		font-weight: bold;
	}
	img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -20;
		object-fit: cover;
	}
	div {
		padding: calc(1.5 * var(--containerPadding));
		width: 100%;
		overflow-wrap: normal;
		overflow-wrap: break-word;
	}
	em {
		color: var(--primary);
	}
	.date {
		margin-bottom: 0;
	}

	@media (max-width: 500px) {
		a {
			border: 0.125rem solid var(--primary);
		}
	}
</style>
