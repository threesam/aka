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
				excerpt,
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
	import {blur} from 'svelte/transition'

	import BlockContent from '@movingbrands/svelte-portable-text'
	import serializers from '../../components/serializers'
	import Cta from '../../components/Cta.svelte'

	let selected = 'aka'
</script>

<style>
	.container {
		padding: 0 var(--containerPadding);
	}
	section {
		max-width: 40rem;
		margin: 0 auto;
		position: relative;
	}

	.content {
		position: relative;
	}
	button {
		background: none;
		border: 0.125rem solid transparent;
		border-bottom: 0.125rem solid var(--textColor);
		color: var(--textColor);
		font-weight: bold;
		padding: 0.5rem;
		border-radius: 2px;
		transition: all 0.3s ease-in-out;
		box-shadow: none;
	}
	
	.selected {
		transition: all 0.3s ease-in-out;
		border-bottom: 0.125rem solid var(--primary);
		/* border-left: 0.125rem dashed var(--primary);
		border-right: 0.125rem solid var(--primary); */
	}

	.content {
		padding-right: 0;
		padding-left: 0;
		padding-top: 0.5rem;
	}
</style>

<div class="container">
	<section>
		<h1>About</h1>
		<button class={selected === 'aka' ? 'selected' : ''} on:click={() => selected = 'aka'}>this site</button>
		<button class={selected ===  'eleanor' ? 'selected' : ''} on:click={() => selected = 'eleanor'}>eleanor</button>
		
		{#if selected === 'aka'}
		<div in:blur class="content">
			<BlockContent blocks={aka.excerpt} {serializers} />
			<!-- <Cta url="/press" text="Press" /> -->
		</div>
			{:else if selected === 'eleanor'}
			<div in:blur class="content">
				<BlockContent blocks={author.bio} {serializers} />
			</div>
			{/if}
	</section>
</div>
	
