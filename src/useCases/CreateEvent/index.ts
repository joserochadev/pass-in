import { PostgresRepository } from '../../repositories/implementations/PostgresRepository'
import { CreateEventController } from './CreateEventController'
import { CreateEventUseCase } from './CreateEventUseCase'

const postgresRepository = new PostgresRepository()
const createEventUseCase = new CreateEventUseCase(postgresRepository)
const createEventController = new CreateEventController(createEventUseCase)

export { createEventController }
