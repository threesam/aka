<script>
  export let url

  let width
  function parentWidth(node) {
    width = node.parentElement.clientWidth;
  }
</script>

<style>
div {
  overflow: hidden;
  padding-top: 56.25%; /* 16:9*/
  position: relative;
}

iframe {
   border: 0;
   height: 100%;
   left: 0;
   position: absolute;
   top: 0;
   width: 100%;
}
</style>

<div>
  <iframe {width} height="auto" use:parentWidth src={url} frameborder="0" allowfullscreen/>
</div>