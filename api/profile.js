import express from 'express'
import { db } from '../firebase.js'

const profileRouter = express.Router()

// /profile
profileRouter.get('/', async (req, res, next) => {
  res.status(200).send('Hello, from /profile!')
}) // get list of active users
profileRouter.get('/:userId', async (req, res, next) => {}) // self-view with more options or public view with fewer options
profileRouter.patch('/:userId', async (req, res, next) => {}) // self-update of user profile
profileRouter.delete('/:userId', async (req, res, next) => {}) // self-delete of user (soft delete, unpublish all guides, deactivate comments (maybe follow reddit method))

export default profileRouter
