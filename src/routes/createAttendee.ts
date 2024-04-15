import { FastifyInstance } from 'fastify'
import { createAttendeeController } from '../useCases/CreateAtendee'

export async function createAttendee(app: FastifyInstance) {
	app.post('/events/:eventId/attendee', async (request, reply) => {
		await createAttendeeController.handle(request, reply)
	})
}
