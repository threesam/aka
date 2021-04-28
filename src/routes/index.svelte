<script context="module">
  import client from '../sanityClient'
	import BlockContent from '@movingbrands/svelte-portable-text'
	import serializers from '../components/serializers'
	
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
			"content": content[]->{
				title, 
				excerpt,
				cta,
				slug,
				order,
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

	console.log(page.content)
	
	import {onMount} from 'svelte'
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
		position: relative;
		/* place-items: center; */
		width: 100%;
		min-height: 100%;
		height: 100vh;
	}

	h1 {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		margin: 0;
	}
	
	/* h2 {
		padding-top: 0;
		margin-top: 0;
	}

.flex {
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
	<section>
		<h2>Featured Project</h2>
		<ListCard data={page.content[0]} />
	</section>
	<section>
		<h3>More Projects</h3>
		<ul>
			{#each page.content.slice(1) as item}
			<ListCard data={item} />
			{/each}
		</ul>
	</section>
</main>