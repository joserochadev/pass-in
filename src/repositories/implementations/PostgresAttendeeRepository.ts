import { IAttendee } from '../../interfaces/IAttendee'
import { prisma } from '../../lib/prisma'
import { IAttendeeRepository } from '../IAttendeeRepository'

export class PostgresAttendeeRepository implements IAttendeeRepository {
	async create({ name, email, eventId }: IAttendee): Promise<IAttendee> {
		const attendee = await prisma.attendee.create({
			data: {
				name,
				email,
				eventId,
			},
		})

		return attendee
	}
	async findAttendeeOnEvent(attendeeEmail: string, eventId: string): Promise<IAttendee | null> {
		const attendeeOnEvent = await prisma.attendee.findUnique({
			where: {
				eventId_email: {
					email: attendeeEmail,
					eventId,
				},
			},
		})

		return attendeeOnEvent
	}
}
