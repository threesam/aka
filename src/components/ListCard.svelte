<script>
  export let data
  export let i = 0
  const {slug, title, image: src, alt, excerpt, publishedAt} = data
  

  import {fly} from 'svelte/transition'
  // import imageBuilder from '../utils/imageUrlBuilder'
  import MediaQuery from "svelte-media-query"
  import SplashFilter from './SplashFilter.svelte'
  import { stores } from '@sapper/app';
  import {format, parseISO} from 'date-fns';
	const { page } = stores();

  // let width
  let height = 'auto'

  // function parentWidth(node) {
  //   width = node.parentElement.clientWidth;
  // }
</script>

<style>
  a {
    display: block;
    position: relative;
    width: 100%;
		border-radius: 3px;
    overflow: hidden;
    margin-bottom: 2rem;
    box-shadow: var(--level-2);
    transition: all 0.3s ease-in-out;
    border: 0.125rem solid var(--darkGrey);
  }
  a:hover {
    box-shadow: var(--level-3);
  }
	h2 {
    font-family: var(--bodyFont);
    font-weight: bold;
		font-size: var(--h4);
    padding: 0;
    margin: 0;
		font-weight: bold;
	}
  /* img {
    position: absolute;
    top: -10%;
    left: -10%;
    width: 120%;
    height: 120%;
    z-index: -20;
    object-fit: cover;
  } */
  div {
    padding: var(--containerPadding);
    width: 100%;
    overflow-wrap: normal;
    overflow-wrap: break-word;
  }
  em {
		color: var(--primary);
	}
  .date {
    margin-bottom: 0;
  }

  @media (max-width: 767px) {
    a {
      border: 0.125rem solid var(--primary);
    }
  }
</style>

<!-- style={`height: ${height}px;`}  -->
    <li in:fly={{y: 25, delay: i * 100, duration: 600}}><a
      rel="prefetch" 
      href="{$page.path}/{slug}">
      <div>
        <h2>{title}</h2>
        {#if excerpt}
          <p class="excerpt">{excerpt}</p>
        {/if}
        {#if publishedAt}
          <p class="date"><em>{format(parseISO(publishedAt), 'yyyy-MM-dd')}</em></p>
        {/if}
      </div>
      <!-- <img 
        {width} 
        {height} 
        use:parentWidth 
        src={imageBuilder(src).width(width).height(height).auto('format').url()} 
        {alt} 
        loading="lazy" 
      /> -->
      <SplashFilter />
    </a></li>