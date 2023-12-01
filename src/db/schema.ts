import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export type Todo = {
	id: number
	content: string
	completed: boolean
}

export const todos = sqliteTable('todos', {
	id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
	content: text('content').notNull(),
	completed: integer('completed', { mode: 'boolean' }).notNull().default(false),
})
