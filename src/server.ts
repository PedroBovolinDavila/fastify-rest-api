import fastify from 'fastify'
// import { randomUUID } from 'node:crypto'
import { knex } from './database'

const app = fastify()

app.get('/hello', async () => {
  const transaction = await knex('transactions')
    .where('amount', 500)
    .select('*')

  return transaction
})

app
  .listen({
    port: 3333,
  })
  .then(() => console.log('Server on.'))
