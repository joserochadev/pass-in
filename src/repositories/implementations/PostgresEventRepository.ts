import { IAttendee } from '../../interfaces/IAttendee'
import { IEvent } from '../../interfaces/IEvent'
import { prisma } from '../../lib/prisma'
import { IEventRepository } from '../IEventRepository'

export class PostgresRepository implements IEventRepository {
	async create({
		title,
		description,
		maximunAttendees,
		slug,
	}: Omit<IEvent, 'id'>): Promise<IEvent> {
		const event = await prisma.event.create({
			data: {
				title,
				description,
				maximunAttendees,
				slug,
			},
		})

		return event
	}
}
