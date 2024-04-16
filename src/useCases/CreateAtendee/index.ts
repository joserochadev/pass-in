import { PostgresAttendeeRepository } from '../../repositories/implementations/PostgresAttendeeRepository'
import { PostgresEventRepository } from '../../repositories/implementations/PostgresEventRepository'
import { CreateAttendeeController } from './CreateAttendeeController'
import { CreateAttendeeUseCase } from './CreateAttendeeUseCase'

const attendeeRepository = new PostgresAttendeeRepository()
const eventRepository = new PostgresEventRepository()
const createAttendeeUseCase = new CreateAttendeeUseCase(
	attendeeRepository,
	eventRepository,
)
const createAttendeeController = new CreateAttendeeController(
	createAttendeeUseCase,
)

export { createAttendeeController }
