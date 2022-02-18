<script>
	import { supabase } from '../supabase';

	let loading = false;
	let email;

	const handleLogin = async () => {
		try {
			loading = true;
			const { error } = await supabase.auth.signIn({ email });
			if (error) throw error;
			alert('Check your E-Mail for the login link.');
		} catch (err) {
			console.error(err);
			alert(err.error_description || err.message);
		} finally {
			loading = false;
		}
	};
</script>

<h1 class="text-2xl font-bold text-center text-gray-800 md:text-3xl">Login</h1>
<p class="text-center mt-2">Login via magic link with your E-Mail below.</p>

<form class="my-6" on:submit|preventDefault={handleLogin}>
	<div class="flex flex-col text-sm mb-2">
		<label for="email" class="font-bold mb-2 text-gray-800">E-Mail</label>
		<input
			type="email"
			bind:value={email}
			name="email"
			placeholder="E-Mail"
			class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focues:border-gray-500 rounded-lg"
		/>
	</div>
	<button
		type="submit"
		class="w-full shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4"
		>Login</button
	>
</form>
