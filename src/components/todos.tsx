import type { Todo } from '../types'

function TodoItem({ id, content, completed }: Todo) {
	return (
		<div class='flex p-2 my-1 bg-blue-300 rounded-md items-center justify-between space-x-3 min-w-[300px] shadow pb-2 border'>
			<p>{content}</p>
			<div class='space-x-3'>
				<input
					type='checkbox'
					class='cursor-pointer w-4 h-4 border-2 border-gray-300 rounded-md'
					checked={completed}
				/>
				<button class='text-red-500'>X</button>
			</div>
		</div>
	)
}

export function TodoList({ todos }: { todos: Todo[] }) {
	return (
		<div class='flex flex-col items-center p-4'>
			{todos.map((todo) => (
				<TodoItem {...todo} />
			))}
		</div>
	)
}
