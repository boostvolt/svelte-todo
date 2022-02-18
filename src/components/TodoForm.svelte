<script>
	import { addTodo } from '../stores/todoStore';
	import { user } from '../stores/authStore';

	let todo = '';

	const handleSubmit = () => {
		addTodo(todo, $user.id);
		todo = '';
	};
</script>

<form class="my-6" on:submit|preventDefault={handleSubmit}>
	<div class="flex flex-col tex-sm mb-2">
		<label for="todo" class="font-bold mb-2 text-gray-800">Todo</label>
		<input
			type="text"
			bind:value={todo}
			name="todo"
			placeholder="Enter new todo"
			class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focues:border-gray-500 rounded-lg"
		/>
	</div>
	<button
		type="submit"
		class="w-full shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">Add</button
	>
</form>
