import fastify from 'fastify'
import { createEvent } from './routes/createEvent'
import { createAttendee } from './routes/createAttendee'

export const app = fastify()

app.register(createEvent)
app.register(createAttendee)
