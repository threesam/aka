<script context="module">
  import client from '../sanityClient'
	
  export async function preload() {
		const siteSettings = /* groq */ `*[_type == "siteSettings"][0]{
			"image": image.asset->url, 
			"alt": image.alt, 
			wordCloud{
				"shape": shape[0],
				uselessWords
			}
		}`
    const words = /* groq */ `*[_type == "post"]{title, "title": excerpt[0].children[0].text}`
    const page = /* groq */ `*[_type == 'page'][0]{
			"content": content[0..4]->{
				title, 
				excerpt,
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

const data = await client.fetch(query).catch((err) => this.error(500, err))

return { data }
}
</script>

<script>
	export let data
	const {words, settings, page} = data
	const {content} = page
	
	import {onMount} from 'svelte'
	import BlockContent from '@movingbrands/svelte-portable-text'
	import serializers from '../components/serializers'
	import Image from '../components/Image.svelte'
	import Cta from '../components/Cta.svelte'
	import ListCard from '../components/ListCard.svelte'
	
	let WordCloud
  onMount(async () => {
      const mod = await import("../components/WordCloud.svelte")
      WordCloud = mod.default
  })
	import {transform} from '../utils/transform'
	const transformedWords = transform(words, settings.wordCloud.uselessWords)
</script>

<style>
	section {
		/* display: grid; */
		/* place-items: center; */
		width: 100%;
		min-height: 100vh;
	}

	h1 {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		margin: 0;
	}

	h2 {
		text-align: center;
		font-size: var(--bigH);
	}

	.projects {
		max-width: 56rem;
		padding: var(--containerPadding);
		margin: 0 auto;
	}

	.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: var(--containerPadding);
}

	.grid:first-child {
  grid-column: 1 / 4; /* span from grid column line 1 to 3 (i.e., span 2 columns) */
}

	figure {
		margin: 0;
	}


/* .flex {
	display: flex;
	flex-direction: row;
}

.content {
	margin-top: 0;
	max-width: 100vw;
} */

/* .grid {
	grid-template-columns: 1fr 1fr;
	max-width: 56rem;
	margin: 0 auto;
	border: var(--line);
}

img {
	height: auto;
	max-width: 100%;
	padding: var(--containerPadding);
} */

span {
	color: var(--primary);
}

.flex {
	justify-content: flex-start;
}

.more {
	display: grid;
	place-items: center;
	width: 100%;
	height: 100%;
}

.more a {
	text-decoration: none;
	color: var(--textColor);
	font-size: var(--h4);
	font-family: var(--bodyFont);
	margin: 50% 0;
	border-bottom: 0.125rem solid var(--primary);
}

.more a:hover {
	transition: all 0.69s ease-in-out;
	color: var(--secondary);
}

@media (min-width: 1024px) {
	h1 {
		font-size: var(--biggestH);
	}
}

@media (min-width: 768px) and (max-width: 1023px) {
	h1 {
		font-size: var(--bigH);
	}
}

@media (max-width: 767px) {
	h1 {
		font-size: var(--h1);
	}
}

</style>

<svelte:component this={WordCloud} words={transformedWords} shape={settings.wordCloud.shape}/>
<main>
	<section>
		<h1>Art<span>Killing</span>Apathy</h1>
	</section>
	<section class="projects">
		<h2>Featured</h2>
		<ul class="grid">
			{#each content as {title, slug, cta, excerpt, image, alt}}
				 <li>
					<h3>{title}</h3>
					<figure>
						<Image url={image} {alt} />
					</figure>
					<div class="flex">
						<Cta url={cta.url} text={cta.text} />
						<Cta secondary="true" url={`art/${slug}`} text="Learn More" />
					</div>
					<!-- <BlockContent blocks={excerpt} {serializers} /> -->
				</li>
			{/each}
			<div class="more">
				<a href="art">more art</a>
			</div>
		</ul>
	</section>
</main>