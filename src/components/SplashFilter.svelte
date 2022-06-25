<script>
  export let opacity = 0.8
</script>

<style>
  div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--background);
    z-index: -10;
  }

  div:hover {
    background-color: red;
  }
</style>

<div style="opacity: {opacity};" role="none"></div>