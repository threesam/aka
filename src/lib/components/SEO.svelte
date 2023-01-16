<script>
	import SvelteSeo from 'svelte-seo'
	import imageBuilder from '$lib/utils/imageUrlBuilder'
	import { page } from '$app/stores'

	const SEO_IMAGE_WIDTH = 1200
	const SEO_IMAGE_HEIGHT = 1200
	const TWITTER_IMAGE_HEIGHT = 628

	const host = 'https://artkillingapathy.com'

	export let title = 'ArtKillingApathy'
	export let description
	export let publishedAt
	export let image
	export let alt
	export let tags
	export let type = 'website'
</script>

{#if type !== 'website'}
	<SvelteSeo
		{title}
		{description}
		openGraph={{
			title,
			description,
			url: host + $page.url.pathname,
			type: 'article',
			article: {
				publishedTime: publishedAt,
				authors: ['https://www.artkillingapathy.com/about'],
				tags,
			},
			images: [
				{
					url: imageBuilder(image)
						.width(SEO_IMAGE_WIDTH)
						.height(SEO_IMAGE_HEIGHT)
						.url(),
					width: SEO_IMAGE_WIDTH,
					height: SEO_IMAGE_HEIGHT,
					alt,
				},
			],
		}}
		twitter={{
			title,
			description,
			image: imageBuilder(image)
				.width(SEO_IMAGE_WIDTH)
				.height(TWITTER_IMAGE_HEIGHT)
				.url(),
			imageAlt: alt,
		}}
	/>
{:else}
	<SvelteSeo
		{title}
		{description}
		openGraph={{
			title,
			description,
			url: host + $page.url.pathname,
			type: 'website',
			images: [
				{
					url: imageBuilder(image)
						.width(SEO_IMAGE_WIDTH)
						.height(SEO_IMAGE_HEIGHT)
						.url(),
					width: SEO_IMAGE_WIDTH,
					height: SEO_IMAGE_HEIGHT,
					alt,
				},
			],
		}}
		twitter={{
			title,
			description,
			image: imageBuilder(image)
				.width(SEO_IMAGE_WIDTH)
				.height(TWITTER_IMAGE_HEIGHT)
				.url(),
			imageAlt: alt,
		}}
	/>
{/if}
