<script>
  import Cta from './Cta.svelte'
</script>

<style>
  footer {
    display: grid;
    place-content: center;
    width: 100%;
    background: linear-gradient(var(--background), var(--cardBg));
    color: inherit;
    padding: 2rem;
  }

p:first-child {
  max-width: 35rem;
  text-align: center;
  padding: 2rem;
  border: 0.125rem solid var(--cardBg);
}

p:last-child {
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-size: var(--smallText);
  padding: 2rem 0;
}
</style>

<footer>
  <p>For more content <a href="http://bit.ly/ActOutNewsletter">subscribe</a> to the Act Out! newsletter and for frequent updates, appearances and press <a href="https://twitter.com/radicaleleanor" target="_blank" rel="noopener">follow me</a> on Twitter.</p>
  <p>© 2014-2020 Art Killing Apathy | <span>site by <a href="https://threesam.com">Sam</a></span></p>
</footer>