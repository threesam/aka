<script>
  import { stores } from '@sapper/app'
	const { page } = stores();
  
  const currentYear = new Date().getFullYear()
</script>

<style>
  footer {
    display: grid;
    place-content: center;
    width: 100%;
    background: linear-gradient(var(--background), var(--cardBg));
    color: inherit;
    padding: var(--containerPadding);
  }

  p {
    font-weight: 100;
  }

p:first-child {
  max-width: calc(40rem - (2 * var(--containerPadding)));
  text-align: center;
  margin: 0;
  margin-top: calc(4 * var(--containerPadding));
  padding: 3rem;
  border: 0.125rem solid var(--secondaryBg);
  box-shadow: var(--level-2);
}

p:last-child {
  width: 100%;
  margin: var(--containerPadding) auto 0 auto;
  text-align: center;
  font-size: var(--smallText);
  padding: 2rem 0;
  font-family: var(--headingFont);
}

a {
  transition: all 0.69s ease-in-out;
}

a:hover {
  color: var(--primary);
  border-bottom: 0.125rem solid transparent;
}

@media (max-width: 500px) {
  p:first-child {
    text-align: left;
    padding: var(--containerPadding);
  }
}
</style>

<footer>
  <p>For more content <span class="umami--click--footer{$page.path !== '/' ? `-${$page.path.substring(1).replace(/\//, '-')}` : '-home'}-newsletter"><a href="http://bit.ly/ActOutNewsletter">subscribe</a></span> to the Act Out! newsletter and for frequent updates, appearances and press <span class="umami--click--footer{$page.path !== '/' ? `-${$page.path.substring(1).replace(/\//, '-')}` : '-home'}-twitter"><a href="https://twitter.com/radicaleleanor" target="_blank" rel="noopener">follow me</a></span> on Twitter.</p>
  <p>© 2014-{currentYear} Art Killing Apathy | <span class="umami--click--threesam{$page.path !== '/' ? `-${$page.path.substring(1).replace(/\//, '-')}` : '-home'}">site by <a href="https://threesam.com">Sam</a></span></p>
</footer>