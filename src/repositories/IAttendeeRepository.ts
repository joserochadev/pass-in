import { IAttendee } from '../interfaces/IAttendee'

export interface IAttendeeRepository {
	create(attendee: IAttendee): Promise<IAttendee>
	findAttendeeOnEvent(attendeeEmail: string, eventId: string): Promise<IAttendee | null>
}
