<script context="module">
  import client from "../../sanityClient"

  export async function preload() {
		const query = /* groq */`*[_type == "siteSettings"][0]{
			"author": author->{
				name,
				"image": image.asset->url,
				bio,
				"slug": slug.current
			},
			"aka": {
				title,
				description,
				"image": image.asset->url,
				"alt": image.alt
			}
		}`
		
    const data = await client
      .fetch(query)
			.catch((err) => this.error(500, err))
    
    return {...data}
  }
</script>

<script>
	export let aka, author

	import BlockContent from '@movingbrands/svelte-portable-text'
	import serializers from '../../components/serializers'
</script>

<style>
	.content {
		border: 1px solid var(--grey);
	}
</style>

<h1>About</h1>
<p>{aka.description}</p>
<a href="/press">Press Links</a>

<div class="content">
	<BlockContent blocks={author.bio} {serializers} />
</div>

