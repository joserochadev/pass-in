import { PostgresAttendeeRepository } from '../../repositories/implementations/PostgresAttendeeRepository'
import { CreateAttendeeController } from './CreateAttendeeController'
import { CreateAttendeeUseCase } from './CreateAttendeeUseCase'

const attendeeRepository = new PostgresAttendeeRepository()
const createAttendeeUseCase = new CreateAttendeeUseCase(attendeeRepository)
const createAttendeeController = new CreateAttendeeController(createAttendeeUseCase)

export { createAttendeeController }
