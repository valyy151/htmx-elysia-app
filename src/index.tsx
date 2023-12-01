import { db } from './db'
import { Elysia, t } from 'elysia'
import { todos } from './db/schema'
import { BaseHTML } from './baseHTML'
import { html } from '@elysiajs/html'
import { TodoList } from './components/todos'
import { createTodo, deleteTodo, toggleTodo } from './actions'

const params = t.Object({ id: t.Numeric() })

export const app = new Elysia()
	.use(html())
	.get('/', ({ html }) =>
		html(
			<BaseHTML>
				<body
					hx-get='/todos'
					hx-trigger='load'
					hx-swap='innerHTML'></body>
			</BaseHTML>
		)
	)
	.group('/todos', (app) =>
		app
			.get('/', async () => {
				const data = await db.select().from(todos).all()
				return <TodoList todos={data} />
			})
			.delete('/:id', async ({ params }) => await deleteTodo(params), { params: params })
			.post('/toggle/:id', async ({ params }) => await toggleTodo(params), { params: params })
			.post('/', async ({ body }) => await createTodo(body), { body: t.Object({ content: t.String() }) })
	)
	.listen(3000)

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)
