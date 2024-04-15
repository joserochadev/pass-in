import { IAttendee } from '../../interfaces/IAttendee'
import { IAttendeeRepository } from '../../repositories/IAttendeeRepository'

interface IRequest {
	name: string
	email: string
	eventId: string
}

export class CreateAttendeeUseCase {
	constructor(private attendeeRepository: IAttendeeRepository) {}
	async execute({ name, email, eventId }: IRequest): Promise<IAttendee> {
		const attendeeFromEvent = await this.attendeeRepository.findAttendeeOnEvent(email, eventId)

		if (attendeeFromEvent !== null) {
			throw new Error('this e-mail already registered for this event!')
		}

		const attendee = await this.attendeeRepository.create({
			name,
			email,
			eventId,
		})

		return attendee
	}
}
