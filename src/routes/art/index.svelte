<script context="module">
  import client from "../../sanityClient";

  export async function preload() {
		const siteSettings = /* groq */`*[_type == "siteSettings"][0]{"image": featuredMedia.asset->url, "alt": featuredMedia.alt}`
    const postsQuery = /* groq */`*[_type == 'post']|order(publishedAt desc){
			"id": _id,
			"slug": slug.current,
			title,
			publishedAt,
			"categories": categories[]->slug.current,
			"excerpt": excerpt[0].children[0].text,
			// "image": featuredMedia.asset->url,
			// "alt": featuredMedia.alt
		}`
		const categories = /* groq */`*[_type == "category"]|order(order asc){"slug": slug.current, title, description, order}`


		const query = `{
			"settings": ${siteSettings},
			"posts": ${postsQuery},
			"categories": ${categories}
		}`
		
    const data = await client
      .fetch(query)
			.catch((err) => this.error(500, err))
    
    return {data}
  }
</script>

<script>
	export let data
	const {settings, posts, categories} = data

	
	import {slide, fade, fly} from 'svelte/transition'
	import SEO from '../../components/SEO.svelte'
	import ListCard from '../../components/ListCard.svelte'
	import Search from '../../components/icons/Search.svelte'
	
	let selected = {
		slug: '',
		title: ''
	}

	$: filterPosts = (posts) => posts.filter(post => {
		if(selected.slug) {
			return post.categories.includes(selected.slug)
		} else {
			return post
		}
	}).filter(post => searchList(post, query))

	function focus(node) {
		return node.focus()
	} 

	let value = ""
	$: query = new RegExp(value, 'g')

	$: more = 10

	function searchList(list, query) {
		return list.title.toLowerCase().match(query) || list.excerpt.toLowerCase().match(query)
	}

	let showSearch = false
	// let showCategories = false

	let width
  function parentWidth(node) {
    width = node.parentElement.clientWidth;
  }
</script>

<style>
	main {
		min-height: 100vh;
		padding: 3rem var(--containerPadding);
	}
	section {
		max-width: 40rem;
		margin: 0 auto;
	}

	h1 {
		margin: 3rem 0 1rem 0;
	}
/* 
	span {
		font-size: var(--h5);
	}

	span span {
		font-size: var(--h4);
		margin-left: 0.25rem;
	} */
	
	.primary {
		color: var(--primary);
	}

	.flex {
		justify-content: flex-start;
		flex-wrap: wrap;
		margin-bottom: 0;
	}
	.flex li {
		margin: 0 0.5rem 0.5rem 0;
	}

	.search {
		display: relative;
		height: 2rem;
		width: 100%;
	}
	.empty-button {
		background: none;
		border: none;
		outline: none;
		padding: 0;
		/* margin: 0 0.25rem 0 0; */
		box-shadow: none;
		color: inherit;
		/* display: block; */
		/* position: absolute; */

		z-index: 20;
	}

	.empty-button:focus {
		color: var(--primary);
	}

	ul.flex {
		margin: 0.5rem 0;
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

	label {
		max-width: 40rem;
		height: 100%;
		position: relative;
	}

	input {
		border: 0.125rem solid var(--textColor);
		font-size: 1rem;
		border-radius: 0;
		background: var(--background);
		color: var(--textColor);
		padding: 0.28rem; 
	}
	/* magic number to match svg search icon */

	input:focus {
		border: 0.125rem solid transparent;
		outline: 0.125rem solid var(--primary);
		outline-style: groove;
	}

	.content-section {
		padding-top: var(--containerPadding);
	}
</style>

<SEO title="Posts" description="Content" {...settings} />

<main>

	<section>
		<h1>My Art</h1>
		
		<!-- SEARCH -->
		<div class="search">
			{#if showSearch}
			<label use:parentWidth for="search">
				<input use:focus style="width: ${width};" transition:slide={{duration: 400}} type="text" bind:value placeholder="search" />
			</label>
			{:else}
			<button in:fade={{delay: 400}} role="search" class="empty-button" on:click={() => showSearch = !showSearch}><Search size="30"/></button>
			{/if}
		</div>

		<!-- CATEGORIES -->
		<ul class="flex">
			<li><button class={!selected.slug ? 'selected' : ''} on:click={() => {
				selected.slug = ""
				selected.title = ""
				selected.description = ""
				value = ""
				showSearch = false
				}}>all</button></li>
			{#each categories.filter(category => category.slug !== 'uncategorized') as {slug, title, description}, i}
				<li><button class={selected.slug === slug ? 'selected' : ''} on:click={() => {
					selected.slug = slug
					selected.title = title
					selected.description = description
					value = ""
					showSearch = false
					}}>{title.toLowerCase()}</button></li>
			{/each}
		</ul>

		{#if selected.description && filterPosts(posts).length}
			 <p in:slide>{selected.description}</p>
		{/if}
		
		<!-- SEARCH RESULTS -->
		{#if value && filterPosts(posts).length}
			{#if selected.slug}
				<p transition:slide>{filterPosts(posts).length} {filterPosts(posts).length} matches "{value}" in <em class="primary">{selected.title.toLowerCase()}</em></p>	
			{:else}
				<p transition:slide>{filterPosts(posts).length} {filterPosts(posts).length} matches "{value}"</p>
			{/if}
		{/if}
	</section>
	
	<!-- POSTS -->
	<section class="content-section">
		<ul>
			{#each filterPosts(posts).slice(0, more) as post, i (post.id)}
				<ListCard data={post} {i} />
			{:else}
				{#if selected.slug && !value}
					<li in:fly={{y: 50}}>No posts in <em class="primary">{selected.title.toLowerCase()}</em></li>
				{:else}
					<li in:fly={{y: 50}}>No posts to display</li>
				{/if}
			{/each}
		</ul>
		{#if filterPosts(posts).filter(post => searchList(post, query)).length > 9}
			 <button on:click={() => more += 10}>show more</button>
		{/if}
	</section>
	
</main>