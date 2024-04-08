import fastify from 'fastify'
import { createEvent } from './routes/createEvent'

export const app = fastify()

app.register(createEvent)
