import { db } from './db'
import { eq } from 'drizzle-orm'
import { todos } from './db/schema'
import { TodoItem } from './components/todos'

export async function createTodo(body: { content: string }) {
	if (body.content.length === 0) {
		throw new Error('Content cannot be empty')
	}

	const newTodo = await db.insert(todos).values(body).returning().get()

	return <TodoItem {...newTodo} />
}

export async function toggleTodo(params: { id: number }) {
	const oldTodo = await db.select().from(todos).where(eq(todos.id, params.id)).get()

	const newTodo = await db
		.update(todos)
		.set({ completed: !oldTodo?.completed })
		.where(eq(todos.id, params.id))
		.returning()
		.get()

	return <TodoItem {...newTodo} />
}

export async function deleteTodo(params: { id: number }) {
	await db.delete(todos).where(eq(todos.id, params.id)).run()
}
