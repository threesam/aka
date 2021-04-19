<script context="module" lang="ts">
  import client from "../../sanityClient";
	
  export async function preload({params}) {
		const {slug} = params
    const query = /* groq */`*[_type == "post" && slug.current == $slug][0]{
      title,
      "image": featuredMedia.asset->url,
      "alt": featuredMedia.alt,
      "palette": featuredMedia.asset->metadata.palette.darkMuted.background,
      body,
			...
    }`

const post = await client
.fetch(query, {slug})
.catch((err) => this.error(500, err))

return {post}
}
</script>

<script>
	export let post;
	const {title, image, alt, body} = post
	console.log('post', post);
	import BlockContent from '@movingbrands/svelte-portable-text'
	import serializers from '../../components/serializers'
</script>



<h1>{title}</h1>
<img src={image} {alt}>

<div class="content">
	<BlockContent blocks={body} {serializers} />
</div>

