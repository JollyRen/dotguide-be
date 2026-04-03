import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import apiRouter from './api/index.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.disable('x-powered-by')

app.use('/api', apiRouter)

app.use('/', async (req, res, next) => {
  if (req.path !== '/') res.status(404)
  if (req.path === '/' && req.statusCode === 404) res.status(200)
  try {
    switch (res.statusCode) {
      case 401: {
        throw { status: 401, message: 'Attempting to access forbidden area' }
      }
      case 404: {
        throw { status: 404, message: 'Please use a valid endpoint' }
      }
      case 500: {
        throw { status: 500, message: 'Illegal Operation' }
      }
      default: {
        res.send('<h1>404: Please use a valid endpoint</h1>')
      }
    }
  } catch (error) {
    next(error)
  }
})

app.use(async (err, req, res, next) => {
  const { status, message } = err
  console.error(status, message)
  res.status(status).send(`<h1>${status}: ${message}</h1>`)
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('Listening on port', port)
})
