<script>
  export let url, text
  console.log(url, text)
</script>

<style>
  a {
    display: inline-block;
    text-decoration: none;
    background: var(--primary);
    color: var(--background);
    border-radius: 3px;
    font-family: var(--headingFont);
    padding: 5px 13px;
  }
</style>

<a class="cta" href={url}>{text}</a>