<script>
	import { slide } from 'svelte/transition'
	import { createForm } from 'svelte-forms-lib'

	$: isSubmitted = false
	$: message = ''

	const { form, handleChange, handleSubmit } = createForm({
		initialValues: {
			email: '',
		},
		onSubmit: async values => {
			try {
				const response = await fetch('/api/subscribe', {
					method: 'POST',
					body: JSON.stringify({ email: values.email }),
				})

				if (response.status == 400) {
					message = 'Already Subscribed!'
				}
				if (response.status == 200) {
					message = 'Thanks for Subscribing!'
				}
				// const json = await response.json()
				isSubmitted = true

				setTimeout(() => {
					$form.email = ''
					isSubmitted = false
				}, 3000)
			} catch (error) {
				console.error(error)
			}
		},
	})
</script>

<div class="subscribe-form">
	<h3>Follow for Updates</h3>
	<form
		action="/api/subscribe"
		method="post"
		on:submit|preventDefault={handleSubmit}
	>
		<label for="email">
			<input
				type="email"
				name="email"
				id="email"
				placeholder="enter email"
				on:change={handleChange}
				bind:value={$form.email}
			/>
		</label>
		<button type="submit">Subscribe</button>
	</form>
	{#if isSubmitted}
		<h5 transition:slide>{message}</h5>
	{/if}
</div>

<style>
	.subscribe-form {
		max-width: 100%;
	}
	form {
		display: flex;
	}

	label {
		flex: 1;
		align-self: stretch;
		padding: 1px 0;
	}

	input {
		height: 100%;
		border: 0.125rem solid var(--textColor);
		font-size: 1rem;
		border-radius: 0;
		background: var(--background);
		color: var(--textColor);
		padding: 0.28rem;
	}
	/* magic number to match svg search icon */

	input:focus {
		border: 0.125rem solid transparent;
		outline: 0.125rem solid var(--primary);
		outline-style: groove;
	}

	button {
		background-color: var(--primary);
		font-family: var(--headingFont);
		padding: 1rem 1.5rem;
	}

	h3,
	h5 {
		margin-top: 0;
	}

	@media screen and (max-width: 600px) {
		h3 {
			font-size: var(--h4);
		}
	}
</style>
