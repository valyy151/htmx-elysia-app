import { Todo } from '../db/schema'

export function TodoItem({ id, content, completed }: Todo) {
	return (
		<div class='flex p-2 my-1 bg-blue-300 rounded-md items-center justify-between space-x-3 min-w-[300px] shadow pb-2 border'>
			<p>{content}</p>
			<span class='space-x-3'>
				<input
					type='checkbox'
					hx-target='closest div'
					hx-swap='outerHTML'
					checked={completed}
					hx-post={`/todos/toggle/${id}`}
					class='cursor-pointer w-4 h-4 border-2 border-gray-300 rounded-md'
				/>
				<button
					hx-swap='outerHTML'
					class='text-red-500'
					hx-target='closest div'
					hx-delete={`/todos/${id}`}>
					X
				</button>
			</span>
		</div>
	)
}

export function TodoList({ todos }: { todos: Todo[] }) {
	return (
		<div class='flex flex-col items-center p-4'>
			{todos.map((todo) => (
				<TodoItem {...todo} />
			))}

			<CreateTodo />
		</div>
	)
}

export function CreateTodo() {
	return (
		<form
			_='on submit target.reset()'
			hx-post='/todos'
			hx-swap='beforebegin'
			class='flex space-x-3'>
			<input
				type='text'
				name='content'
				class='border border-black'
			/>

			<button type='submit'>Submit</button>
		</form>
	)
}
