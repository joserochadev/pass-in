import { IEvent } from '../../interfaces/IEvent'
import { prisma } from '../../lib/prisma'
import { IEventRepository } from '../../repositories/IEventRepository'
import { generateSlug } from '../../utils/generateSlug'

interface IRequest {
	title: string
	description: string | null
	maximunAttendees: number | null
}

export class CreateEventUseCase {
	constructor(private eventRepository: IEventRepository) {}

	async execute({ title, description, maximunAttendees }: IRequest): Promise<IEvent> {
		const slug = generateSlug(title)

		const eventWithSameSlug = await prisma.event.findUnique({
			where: {
				slug,
			},
		})

		if (eventWithSameSlug) {
			throw new Error('Another event with same title already exists!')
		}

		try {
			const event = await this.eventRepository.create({
				title,
				description,
				maximunAttendees,
				slug,
			})

			return event
		} catch (error: Error | any) {
			return error.message
		}
	}
}
