import fastify from 'fastify'
import { CreateEvent } from './routes/createEvent'

export const app = fastify()

app.register(CreateEvent)
