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
    const projects = /* groq */ `*[_type == 'post' && "projects" in categories[]->slug.current]|order(publishedAt desc){
			title,
			excerpt,
			"image": featuredMedia.asset->url,
			"alt": featuredMedia.alt
		}`

    const query = `{
			"settings": ${siteSettings},
			"words": ${words},
			"projects": ${projects}
		}`

    const data = await client.fetch(query).catch((err) => this.error(500, err))

    return { data }
  }
</script>

<script>
	export let data
	const {words, settings} = data
	
	import {onMount} from 'svelte'

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
		display: grid;
		position: relative;
		place-items: center;
		min-height: calc(100vh);
		width: 100%;
	}
	h2 {
		padding-top: 0;
	}

.flex {
	display: flex;
	flex-direction: row;
}

.content {
	margin-top: 0;
	max-width: 100vw;
}

.grid {
	grid-template-columns: 1fr max-content;
	max-width: 56rem;
	margin: 0 auto;
}

img {
	height: 100%;
	width: 100%;
}

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
	<section class="grid">
		<img src={data.projects[0].image} alt={data.projects[0].alt}>
		<div class="content">
			<h2>{data.projects[0].title}</h2>
			<BlockContent blocks={data.projects[0].excerpt} {serializers} />
		</div>
	</section>
	<section>
		<h3>More Projects</h3>
	</section>
</main>