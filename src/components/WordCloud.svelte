<script>
  export let words
	export let shape = 'circle'

	import {onMount} from 'svelte'
	import {fade} from 'svelte/transition'
	import WordCloud from 'wordcloud'
	import {darkMode} from '../utils/darkMode'
	import {getCssCustomProperty} from '../utils/main'



	let w
	let h
	
	onMount(() => {
		const white = getCssCustomProperty('--white')
		const lightGrey = getCssCustomProperty('--lighterGrey')
		const darkGrey = getCssCustomProperty('--darkerGrey')
		const black = getCssCustomProperty('--black')
		
		document.getElementById('my_canvas').width = document.getElementById('canvas_ctn').clientWidth;
		document.getElementById('my_canvas').height = document.getElementById('canvas_ctn').clientHeight;


		let gridSize
		if(w > h) {
			gridSize = w /50
		} else {
			gridSize = h /50
		}

		let primary
		let background
			if($darkMode) {
			primary = lightGrey
			background = black
		} else {
			primary = darkGrey
			background = white
		}

		WordCloud(document.getElementById('my_canvas'), { 
			list: words,
			color: primary,
			backgroundColor: background,
			fontFamily: 'mono',
			gridSize:3,
			minSize: 1,
			weightFactor: 5,
			shape
		})
	})
	</script>

<style>
div {
	position: absolute;
	display: grid;
	place-content: center;
	top: var(--headerHeight);
	left: 0;
	right: 0;
	bottom: 0;
	opacity: 0.1;
	overflow: hidden;
}
</style>

<svelte:window bind:innerWidth={w} bind:innerHeight={h} />


<div id="canvas_ctn">
	<canvas  id="my_canvas" />
</div>