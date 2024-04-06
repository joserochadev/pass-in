import { IEvent } from '../interfaces/IEvent'

export interface IEventRepository {
	create(event: Omit<IEvent, 'id'>): Promise<IEvent>
}
