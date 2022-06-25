<script>
	import { createForm } from 'svelte-forms-lib'

	const { form, handleChange, handleSubmit } = createForm({
		initialValues: {
			email: '',
		},
		onSubmit: async values => {
			const response = await fetch('/api/subscribe', {
				method: 'POST',
				body: JSON.stringify({ email: values }),
			})

			console.log(response)
			const json = await response.json()
			console.log(json)
		},
	})
</script>

<div class="subscribe-form">
	<p>hey there, sign up for stuff or whatever</p>
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
				on:change={handleChange}
				bind:value={$form.email}
			/>
		</label>
		<button type="submit">Subscribe</button>
	</form>
</div>
