import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import authRouter from './api/authRouter.js'
import postRouter from './api/postRouter.js'
const app = express()
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use('/', (req, res, next) => {
  res.status(404).send({ message: 'not a valid endpoint' })
})
app.use('/auth', authRouter)
app.use('/posts', postRouter)

// app.use('*', (req, res, next) => {
//   res.redirect('/')
// })

app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).send(err)
})
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`app listening on port ${port}`))
