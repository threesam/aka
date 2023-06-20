<script context="module">
	import client from '$lib/sanityClient'

	export async function load() {
		const siteSettings = /* groq */ `*[_type == "siteSettings"][0]{"image": image.asset->url, "alt": image.alt}`
		const postsQuery = /* groq */ `*[_type == 'post']|order(publishedAt desc){
			"id": _id,
			"slug": slug.current,
			title,
			publishedAt,
			"categories": categories[]->slug.current,
			"excerpt": excerpt[0].children[0].text,
			"image": featuredMedia.asset->url,
			"alt": featuredMedia.alt,
			"tags": tags[]->slug.current
		}`
		const categories = /* groq */ `*[_type == "category"]|order(order asc){"slug": slug.current, title, description, order}`

		const query = `{
			"settings": ${siteSettings},
			"posts": ${postsQuery},
			"categories": ${categories}
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
	export const prerender = true

	export let data
	const { settings, posts, categories } = data

	import { slide, fly } from 'svelte/transition'
	import { writable } from 'svelte/store'

	// Components
	import SEO from '$lib/components/SEO.svelte'
	import ListCard from '$lib/components/ListCard.svelte'

	const initializedCategory = {
		title: '',
		slug: '',
		description: '',
	}

	const selected = writable(initializedCategory)

	const visiblePostsLength = writable(10)

	const slugs = posts.map(word => word.slug)

	$: filterPosts = posts =>
		posts.filter(post => {
			if ($selected.slug) {
				return post.categories.includes($selected.slug)
			} else {
				return post
			}
		})
</script>

<SEO
	title="Art"
	description="The collected works of Eleanor Goldfield"
	{...settings}
/>

<main>
	<section>
		<h1>My Art</h1>
		<!-- CATEGORIES -->
		<ul class="flex">
			<li>
				<button
					class="umami--click--category-all {!$selected.slug ? 'selected' : ''}"
					on:click={() => {
						$selected.slug = ''
						$selected.title = ''
						$selected.description = ''
					}}>all</button
				>
			</li>
			{#each categories.filter(category => category.slug !== 'uncategorized') as { slug, title, description }, i}
				<li>
					<button
						class="umami--click--category-{slug} {$selected.slug === slug
							? 'selected'
							: ''}"
						on:click={() => {
							$selected.slug = slug
							$selected.title = title
							$selected.description = description
						}}>{title.toLowerCase()}</button
					>
				</li>
			{/each}
		</ul>

		{#if $selected.description && filterPosts(posts).length}
			<h2>{$selected.title}</h2>
			<p in:slide><em>{$selected.description}</em></p>
		{/if}
	</section>

	<!-- POSTS -->
	<section class="content-section">
		<ul>
			{#each filterPosts(posts).slice(0, $visiblePostsLength) as post, i (post.id)}
				<ListCard data={post} {i} />
			{:else}
				{#if $selected.slug}
					<li>
						No posts in <em class="primary">{$selected.title.toLowerCase()}</em>
					</li>
				{:else}
					<li>No posts to display</li>
				{/if}
			{/each}
		</ul>
		{#if filterPosts(posts).length > 9}
			<button
				class="umami--click--{$visiblePostsLength}-more-{$selected.slug}"
				on:click={() => ($visiblePostsLength += 10)}>show more</button
			>
		{/if}
	</section>
	{#each slugs as slug}
		<a
			aria-hidden="true"
			style="position: absolute; visibility: hidden;"
			href="art/{slug}">{slug}</a
		>
	{/each}
</main>

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

	h2 {
		font-size: var(--h5);
	}
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
		border-radius: 0;
		border-bottom: 0.125rem solid var(--textColor);
		color: var(--textColor);
		font-weight: bold;
		padding: 0.5rem;
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
