import express from 'express'

import guideRouter from './guide.js'
import profileRouter from './profile.js'
import userRouter from './user.js'

const apiRouter = express.Router()

// /profile (client-side user info)
apiRouter.use('/profile', profileRouter)

// /guide
apiRouter.use('/guide', guideRouter)

// /user (auth / admin functions)
apiRouter.use('/user', userRouter)

apiRouter.use('/', async (req, res, next) => {
  res.send(`
    <h1>Not a valid endpoint. Please try:</h1>
    <ul>
      <li>/profile</li>
      <li>/guide</ li>
      <li>/user</ li>
    </ul>`)
})

apiRouter.use('*', async (req, res, next) => {
  res.send('<h1>please use a valid endpoint</h1>')
})

export default apiRouter
