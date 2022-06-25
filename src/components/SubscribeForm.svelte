<script>
	import { createForm } from 'svelte-forms-lib'

	const { form, handleChange, handleSubmit } = createForm({
		initialValues: {
			email: '',
		},
		onSubmit: values => {
			alert(JSON.stringify(values))
		},
	})
</script>

<div class="subscribe">
	<p>Enter your email to get updates for upcoming articles, events, and ...</p>
	<form action="POST" on:submit|preventDefault={handleSubmit}>
		<label for="email">
			<input
				on:change={handleChange}
				bind:value={$form.email}
				type="email"
				name="email"
				id="email"
			/>
		</label>
		<button type="submit">Subscribe</button>
	</form>
</div>

<style>
	.subscribe {
		position: relative;
		z-index: 10;
	}

	form {
		display: flex;
	}

	form input {
		display: inline-block;
	}
</style>
