import { Router } from 'express'
import admin, { db } from '../firebase'

const { GH_CID: client_id, GH_CS: client_secret } = process.env

const authRouter = Router()

authRouter.get('/me', async (req, res, next) => {
  //add code later
})
authRouter.post('/me', async (req, res, next) => {
  // if user cred, update user's details
})
authRouter.post('/login', async (req, res, next) => {
  // add code later
})

authRouter.post('/register', async (req, res, next) => {
  //add code later
})

authRouter.get('/github/login', async (req, res, next) => {
  // add code later
  if (!req.body.token) {
    const ghURL = `https://github.com/login/oauth/authorize?client_id=${GH_CID}&scope=user`
    res.status(302).send(ghURL)
    // use window.location.href on the client-side - can actually skip this altogether, perhaps, and do it client-side?
  }
  try {
  } catch (error) {
    next(error)
  }
})

authRouter.get('/github/login/callback', async (req, res, next) => {
  // add code later
  try {
    const { code } = req.query
    const body = { client_id, client_secret, code }
    const response = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body
    })
    const json = await response.json()
    if (json.access_token) res.send(json.access_token)
    throw { name: 'noAccessToken', message: 'No Access Token Returned From OAuth Server' }
  } catch (error) {
    next(error)
  }
})

export default authRouter
