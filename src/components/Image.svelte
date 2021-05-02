<script lang="ts">
  import {onMount} from 'svelte'
  import imageBuilder from '../utils/imageUrlBuilder'

  export let url
  export let alt = ""
  export let caption

  let width

  function parentWidth(node) {
    width = node.parentElement.clientWidth;
  }

  // function convertRemToPixels(rem) {    
  //   return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
  // }

  let loaded = false
  let thisImage

  onMount(() => {
    // overflow container
    // const rem = convertRemToPixels(6)
    // width = width + rem

    // mount when image loads
    thisImage.onload = () => {
      loaded = true
    }
  })
</script>

<style>
  figure {
    margin: 0;
    position: relative;
  }
  img {
    filter: brightness(90%);
    position: relative;
    opacity: 0;
    transition: opacity 1200ms ease-out;
    width: 100%;
    height: 100%;
  }

  img.loaded {
    opacity: 1;
  }

  figcaption {
    margin: 0 auto;
    font-size: var(--smallText);
    max-width: 40rem;
    padding: 0 var(--containerPadding) var(--containerPadding) var(--containerPadding);
  }
</style>

<figure>
  <img 
  {width}
  use:parentWidth 
  class:loaded
  src={imageBuilder(url).width(width).auto('format').url()} 
  bind:this={thisImage}
  {alt} 
  loading="lazy" 
  />
  {#if caption}
     <figcaption><em>{caption}</em></figcaption>
  {/if}
</figure>
