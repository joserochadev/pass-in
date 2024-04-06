import fastify from 'fastify'
import { createEventController } from './useCases/CreateEvent'

export const app = fastify()

app.post('/events', async (request, reply) => {
	await createEventController.handle(request, reply)
})
