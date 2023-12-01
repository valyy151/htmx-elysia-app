import { db } from './db'
import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'
import { TodoList } from './components/todos'
import { BaseHTML } from './baseHTML'

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
	.get('/todos', () => <TodoList todos={db} />)
	.listen(8080)

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)
