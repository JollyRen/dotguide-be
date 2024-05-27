import { getGuides } from './db/guides.js'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import apiRouter from './api/index.js'
const app = express()
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use('/', async (req, res, next) => {
  try {
    throw { status: 401, message: 'Not a valid endpoint' }
  } catch (error) {
    next(error)
  }
})
app.use('/api', apiRouter)
app.use('*', async (req, res, next) => {
  res.redirect('/')
})
app.use(async (err, req, res, next) => {
  const { status = 500, message } = err
  console.error(status, message)
  res.status(status).send(`${status}: ${message}`)
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('Listening on port', port)
})
