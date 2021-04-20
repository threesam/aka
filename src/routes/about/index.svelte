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

<h1>About</h1>
<p>{aka.description}</p>

<div class="content">
	<h2>About {author.name.split(' ')[0]}</h2>
	<BlockContent blocks={author.bio} {serializers} />
</div>

