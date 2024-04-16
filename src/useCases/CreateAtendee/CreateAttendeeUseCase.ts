import { IAttendee } from '../../interfaces/IAttendee'
import { IAttendeeRepository } from '../../repositories/IAttendeeRepository'
import { IEventRepository } from '../../repositories/IEventRepository'

interface IRequest {
	name: string
	email: string
	eventId: string
}

export class CreateAttendeeUseCase {
	constructor(
		private attendeeRepository: IAttendeeRepository,
		private eventRepository: IEventRepository,
	) {}

	async execute({ name, email, eventId }: IRequest): Promise<IAttendee> {
		const event = await this.eventRepository.getEvent(eventId)
		const amountOfAttendeeOnEvent =
			await this.attendeeRepository.amountOfAttendeeOnEvent(eventId)

		const attendeeFromEvent = await this.attendeeRepository.findAttendeeOnEvent(
			email,
			eventId,
		)

		if (attendeeFromEvent !== null) {
			throw new Error('this e-mail already registered for this event!')
		}

		if (
			event?.maximunAttendees &&
			amountOfAttendeeOnEvent >= event.maximunAttendees
		) {
			throw new Error(
				'the maximum number of attendees for this event has been reached.',
			)
		}

		const attendee = await this.attendeeRepository.create({
			name,
			email,
			eventId,
		})

		return attendee
	}
}
