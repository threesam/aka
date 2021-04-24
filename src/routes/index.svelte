<script context="module">
  import client from '../sanityClient'
	import BlockContent from '@movingbrands/svelte-portable-text'
	import serializers from '../components/serializers'

  export async function preload() {
    const siteSettings = /* groq */ `*[_type == "siteSettings"][0]{"image": featuredMedia.asset->url, "alt": featuredMedia.alt}`
    const projects = /* groq */ `*[_type == 'post' && "projects" in categories[]->slug.current]|order(publishedAt desc){
			title,
			excerpt,
			"image": featuredMedia.asset->url,
			"alt": featuredMedia.alt
		}`

    const query = `{
			"settings": ${siteSettings},
			"projects": ${projects}
		}`

    const data = await client.fetch(query).catch((err) => this.error(500, err))

    return { data }
  }
</script>

<script>
	export let data
</script>

<style>
	section {
		display: grid;
		place-content: center;
		min-height: calc(100vh);
		width: 100%;
	}

	section:nth-child(odd) {
		background: var(--secondaryBg);
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

</style>

<main>
	<section>
		<h1>ArtKillingApathy</h1>
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