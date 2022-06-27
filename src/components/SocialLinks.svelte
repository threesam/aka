<script>
	import { stores } from '@sapper/app'
	const { page } = stores()
	import { scale } from 'svelte/transition'
	export let flatten
	const d = 50

	export let links = [
		{
			title: 'Email',
			href: 'mailto:eleanor@artkillingapathy.com?subject="From Contact"',
			svg: {
				code: `<svg viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="${d}" height="${d}"><path d="M.5 2.5A1.5 1.5 0 012 1h12a1.5 1.5 0 011.5 1.5v1.208L8 7.926.5 3.708V2.5z" fill="currentColor"></path><path d="M.5 4.855V12.5A1.5 1.5 0 002 14h12a1.5 1.5 0 001.5-1.5V4.855L8 9.074.5 4.854z" fill="currentColor"></path></svg>`,
			},
		},
		{
			title: 'Twitter',
			href: 'https://twitter.com/radicaleleanor',
			svg: {
				code: `<svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="${d}" height="${d}"><path d="M14.977 1.467a.5.5 0 00-.87-.301 2.559 2.559 0 01-1.226.763A3.441 3.441 0 0010.526 1a3.539 3.539 0 00-3.537 3.541v.44C3.998 4.75 2.4 2.477 1.967 1.325a.5.5 0 00-.916-.048C.004 3.373-.157 5.407.604 7.139 1.27 8.656 2.61 9.864 4.51 10.665 3.647 11.276 2.194 12 .5 12a.5.5 0 00-.278.916C1.847 14 3.55 14 5.132 14h.048c4.861 0 8.8-3.946 8.8-8.812v-.479c.363-.37.646-.747.82-1.236.193-.546.232-1.178.177-2.006z" fill="currentColor"></path></svg>`,
			},
		},
		{
			title: 'Instagram',
			href: 'https://instagram.com/radicaleleanor',
			svg: {
				code: `<svg
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="${d}"
      height="${d}">
      <path d="M7.5 5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" fill="currentColor" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.5 0A4.5 4.5 0 000 4.5v6A4.5 4.5 0 004.5 15h6a4.5 4.5 0
        004.5-4.5v-6A4.5 4.5 0 0010.5 0h-6zM4 7.5a3.5 3.5 0 117 0 3.5 3.5 0 01-7
        0zM11 4h1V3h-1v1z"
        fill="currentColor" />
    </svg>`,
			},
		},
		{
			title: 'LinkedIn',
			href: 'https://linkedin.com/in/eleanorgoldfield',
			svg: {
				code: `<svg
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="${d}"
      height="${d}">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 1.5A1.5 1.5 0 011.5 0h12A1.5 1.5 0 0115 1.5v12a1.5 1.5 0 01-1.5
        1.5h-12A1.5 1.5 0 010 13.5v-12zM5 5H4V4h1v1zm-1 6V6h1v5H4zm4.5-4A1.5 1.5
        0 007 8.5V11H6V6h1v.5a2.5 2.5 0 014 2V11h-1V8.5A1.5 1.5 0 008.5 7z"
        fill="currentColor" />
    </svg>`,
			},
		},
	]
</script>

<ul class={flatten ? 'flatten' : ''}>
	{#each links as { href, title, svg }, i}
		<li
			class="umami--click--{$page.path !== '/'
				? `${$page.path.substring(1).replace(/\//, '-')}`
				: 'home'}-{title.toLowerCase()}"
		>
			<!-- <a in:scale={{delay: ((i + 1) * 100) + 500, start: 0}} {href} aria-label={title}>{@html svg.code}</a> -->
			<a
				in:scale={{
					delay: (i === 0 ? 0 : i === 1 || i === 2 ? 150 : 300) + 500,
					duration: 500,
					start: 0,
				}}
				{href}
				aria-label={title}>{@html svg.code}</a
			>
		</li>
	{/each}
</ul>

<style>
	.flatten {
		display: flex;
		justify-content: space-between;
	}
	ul {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
		align-items: center;
		margin: unset;
		margin-bottom: 0.5rem;
	}

	ul li {
		display: grid;
		place-items: center;
		margin-left: 0;
	}

	a {
		color: var(--textColor);
		transition: all 0.3s;
		border-bottom: none;
	}

	a:hover {
		color: var(--primary);
		transform: scale(1.2);
	}
</style>
