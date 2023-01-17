<script>
	import SubscribeForm from '../components/SubscribeForm.svelte'
	import SocialLinks from '../components/SocialLinks.svelte'

	let flatten = false
	function setSize(node) {
		if (node.clientWidth < 767) {
			flatten = true
		}
	}
</script>

<footer use:setSize>
	<!-- CONTENT -->
	<div class="footer-content">
		<SubscribeForm />
		<SocialLinks {flatten} />
	</div>
	<!-- TRADEMARK -->
	<p>
		© 2014-{new Date().getFullYear()} Art Killing Apathy |
		<span>site by <a href="https://threesam.com">Sam</a></span>
	</p>
</footer>

<style>
	footer {
		display: grid;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		position: relative;
		width: 100vw;
		background: linear-gradient(var(--secondaryBg), var(--cardBg));
		color: inherit;
		padding: 4rem var(--containerPadding);
	}

	.footer-content {
		width: 100%;
		display: flex;
		gap: 3rem;
	}

	p {
		width: 100%;
		max-width: 100%;
		margin: 0;
		text-align: center;
		font-size: var(--smallText);
		font-family: var(--headingFont);
		font-weight: 100;
		position: absolute;
		bottom: 1rem;
		width: 100%;
		text-align: center;
	}

	a {
		transition: all 0.69s ease-in-out;
	}

	a:hover {
		color: var(--primary);
		border-bottom: 0.125rem solid transparent;
	}

	@media (max-width: 767px) {
		.footer-content {
			flex-direction: column;
			gap: 1.5rem;
		}
		p:first-child {
			text-align: left;
			padding: var(--containerPadding);
		}
	}
</style>
