import { FastifyRequest, FastifyReply } from 'fastify'
import { CreateEventUseCase } from './CreateEventUseCase'
import { z } from 'zod'

export class CreateEventController {
	constructor(private createEventUseCase: CreateEventUseCase) {}
	async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
		const createEventSchema = z.object({
			title: z.string().min(4),
			description: z.string().nullable(),
			maximunAttendees: z.number().int().positive().nullable(),
		})

		const { title, description, maximunAttendees } = createEventSchema.parse(request.body)

		try {
			const event = await this.createEventUseCase.execute({
				title,
				description,
				maximunAttendees,
			})

			return reply.status(201).send({ eventId: event.id })
		} catch (error: Error | any) {
			return reply.status(400).send({ messagem: error.message })
		}
	}
}
