import express from 'express'
import { getAuth } from 'firebase-admin/auth'

const userRouter = express.Router()

// userRouter.get('/', async (req, res, next) => {
//   res.send('Hello, from /user!')
// }) // get all users in admin mode, include banned / inactive
userRouter.get('/:userId', async (req, res, next) => {}) // get a user in admin mode
userRouter.patch('/:userId', async (req, res, next) => {}) // update user in admin mode (ban, password reset, etc.)
userRouter.delete(':userId', async (req, res, next) => {}) // delete user in admin mode (soft / hard delete)

export default userRouter
