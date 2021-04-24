<script>
  export let opacity = 0.9
</script>

<style>
  div {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: var(--background);
    opacity: 0.9;
    z-index: -10;
  }
</style>

<div style={`opacity: ${opacity};`} role="none"></div>