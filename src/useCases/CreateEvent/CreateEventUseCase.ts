import { IEvent } from '../../interfaces/IEvent'
import { IEventRepository } from '../../repositories/IEventRepository'

interface IRequest {
	title: string
	description: string | null
	maximunAttendees: number | null
}

export class CreateEventUseCase {
	constructor(private eventRepository: IEventRepository) {}

	async execute({ title, description, maximunAttendees }: IRequest): Promise<IEvent> {
		try {
			const event = await this.eventRepository.create({
				title,
				description,
				maximunAttendees,
				slug: new Date().toISOString(),
			})

			return event
		} catch (error: Error | any) {
			return error.message
		}
	}
}
