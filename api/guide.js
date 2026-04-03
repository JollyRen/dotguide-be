import express from 'express'
import { allPublishedGuides, allUserGuides } from '../controllers/index.js'

const guideRouter = express.Router()

// /guide
guideRouter.get('/', allPublishedGuides) // get all published guides, all guides if admin
guideRouter.get('/:userId', allUserGuides) // get all guides of a user (if owner: drafts and private guides included)
guideRouter.post('/', async (req, res, next) => {}) // add a guide - need userId for auth
guideRouter.patch('/:guideId', async (req, res, next) => {}) // update of guide (only self or adding / removing a like (list of userIds) - need userId for content)
guideRouter.delete('/:guideId', async (req, res, next) => {}) // deletion of guide (only owner or admin)

export default guideRouter
