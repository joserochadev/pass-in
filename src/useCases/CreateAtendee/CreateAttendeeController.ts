import { z } from 'zod'
import { FastifyReply, FastifyRequest } from 'fastify'
import { CreateAttendeeUseCase } from './CreateAttendeeUseCase'

export class CreateAttendeeController {
	constructor(private createAttendeeUseCase: CreateAttendeeUseCase) {}

	async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
		const createAttendeeBodySchema = z.object({
			name: z.string().min(4),
			email: z.string().email(),
		})

		const eventIdSchema = z.object({
			eventId: z.string().uuid({ message: 'Invalid event id.' }),
		})

		const { name, email } = createAttendeeBodySchema.parse(request.body)
		const { eventId } = eventIdSchema.parse(request.params)

		try {
			const attendee = await this.createAttendeeUseCase.execute({ name, email, eventId })

			return reply.status(201).send({ attendeeId: attendee.id })
		} catch (error: Error | any) {
			return reply.status(400).send({ message: error.message || 'Unexpected error.' })
		}
	}
}
