import fastify from 'fastify'
import { z } from 'zod'
import { prisma } from './lib/prisma'

export const app = fastify()

app.post('/events', async (request, reply) => {
	const createEventSchema = z.object({
		title: z.string().min(4),
		description: z.string().nullable(),
		maximunAttendees: z.number().int().positive().nullable(),
	})

	const data = createEventSchema.parse(request.body)

	const event = await prisma.event.create({
		data: {
			title: data.title,
			description: data.description,
			maximunAttendees: data.maximunAttendees,
			slug: new Date().toISOString(),
		},
	})

	console.log(data)

	return reply.status(201).send({ eventId: event.id })
})
