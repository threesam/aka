<script context="module">
	import client from '$lib/sanityClient'

	export async function load() {
		const siteSettings = /* groq */ `*[_type == "siteSettings"][0]{
			title,
			description,
			tags,
			"image": image.asset->url, 
			"alt": image.alt, 
			wordCloud{
				"shape": shape[0],
				uselessWords
			}
		}`
		const words = /* groq */ `*[_type == "post"]{title, "title": excerpt[0].children[0].text}`
		const page = /* groq */ `*[_type == 'page'][0]{
			"content": content[]->{
				title, 
				"description": excerpt[0].children[0].text,
				cta,
				"slug": slug.current,
				order,
				publishedAt,
				"image": featuredMedia.asset->url,
				"alt": featuredMedia.alt,
				"categories": categories[]->
			}
		}`

		const query = `{
			"settings": ${siteSettings},
			"words": ${words},
			"page": ${page},
		}`

		const data = await client.fetch(query)

		return {
			props: {
				data,
			},
		}
	}
</script>

<script>
	export let data
	const { words, settings, page } = data
	const { content } = page

	import { onMount } from 'svelte'
	import Image from '$lib/components/Image.svelte'
	import Cta from '$lib/components/Cta.svelte'
	import SEO from '$lib/components/SEO.svelte'
	import { darkMode } from '$lib/utils/darkMode'

	let WordCloud
	onMount(async () => {
		const mod = await import('$lib/components/WordCloud.svelte')
		WordCloud = mod.default
	})
	import { transform } from '$lib/utils/transform'
	const transformedWords = transform(words, settings.wordCloud.uselessWords)
</script>

<SEO {...settings} />

<main>
	<svelte:component
		this={WordCloud}
		words={transformedWords}
		shape={settings.wordCloud.shape}
	/>
	<section>
		<div class="logo">
			{#if $darkMode}
				<img src="ArtKill-light.svg" alt="full logo for art killing apathy" />
			{:else if !$darkMode}
				<img src="ArtKilling.svg" alt="full logo for art killing apathy" />
			{/if}
		</div>
	</section>
	<section class="projects">
		<h2>Featured Art</h2>
		<ul>
			{#each content as { title, slug, cta, image, alt, description }}
				<li>
					<div class="image">
						<Image rounded url={image} {alt} />
					</div>
					<div class="text">
						<h3>{title}</h3>
						<p>{description}</p>
						<div class="ctas">
							{#if cta}
								<Cta {...cta} />
							{/if}
							<Cta
								secondary="true"
								url={`art/${slug}`}
								text="Learn More"
								{slug}
							/>
						</div>
					</div>
				</li>
			{/each}
		</ul>
	</section>
</main>

<style>
	section {
		width: 100%;
		min-height: 100vh;
	}

	.logo {
		position: absolute;
		width: 100%;
		max-width: 56rem;
		padding: var(--containerPadding);
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		margin: 0;
	}

	h2 {
		text-align: center;
		font-size: var(--bigH);
		width: 100%;
		padding: 2rem;
		margin-top: 0;
		margin-bottom: 2rem;
		/* background: var(--primary); */
		border-top: 2px solid var(--primary);
		border-bottom: 2px solid var(--primary);
		color: var(--primary);
	}
	.text {
		padding: var(--containerPadding);
	}

	.text h3 {
		margin-top: 0;
	}

	.ctas {
		display: flex;
		margin-bottom: 4rem;
	}

	h3 {
		margin-bottom: 0.5rem;
	}

	.projects ul {
		max-width: 56rem;
		margin: 0 auto;
	}

	@media (max-width: 767px) {
		h2 {
			font-size: var(--h1);
		}

		.text {
			padding-top: 0;
		}
	}

	@media (min-width: 768px) {
		h2 {
			font-size: var(--bigH);
		}
		li {
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			margin-bottom: 3rem;
		}
		li:nth-child(even) {
			flex-direction: row-reverse;
			justify-content: flex-start;
			text-align: right;
		}

		li:nth-child(even) .ctas {
			flex-direction: row-reverse;
			justify-content: flex-start;
		}

		li .image,
		li .text {
			width: 50%;
		}

		li h3 {
			margin-top: 0;
		}
	}
</style>
