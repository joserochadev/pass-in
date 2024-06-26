import { FastifyInstance } from 'fastify'
import { createEventController } from '../useCases/CreateEvent'

export async function createEvent(app: FastifyInstance) {
	app.post('/events', async (request, reply) => {
		await createEventController.handle(request, reply)
	})
}
