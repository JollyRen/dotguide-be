import { Router } from 'express'
import admin, { db } from '../firebase'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
const { verify, sign } = jwt

const { GH_CID: client_id, GH_CS: client_secret, JWT_SECRET: jwtSecret } = process.env

const authRouter = Router()

authRouter.get('/me', async (req, res, next) => {
  //add code later
})
authRouter.post('/me', async (req, res, next) => {
  // if user cred, update user's details
})
// authRouter.post('/login/', async (req, res, next) => {
//   // add code later
// })

authRouter.post('/register', async (req, res, next) => {
  //add code later
})

authRouter.post('/login/:provider', async (req, res, next) => {
  // add code later
  if (!req.body.token) {
    // create `https://github.com/login/oauth/authorize?client_id=${GH_CID}&scope=user` on front end
    // use window.location.href on the client-side - can actually skip this altogether, perhaps, and do it client-side?
    const { provider } = req.params
    if (provider === undefined) {
      // try normal login scheme with username / password
    } else if (provider === 'github') res.status(302).send({ clientId: GH_CID })
    else throw new Error({ name: 'unknownProvider', message: 'Unknown Provider' })
  }
  try {
    // get user by token (id)
    /* do the below client-side
      if (req.body.code) {
        try {
          const { code } = req.body
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
      }
     */
  } catch (error) {
    next(error)
  }
})

authRouter.post('/login/:provider/:identifier', async (req, res, next) => {
  const { provider, identifier } = req.params
  if (provider === 'github') {
    // const hashedIdent = await bcrypt.hash(identifier, 10)
    // find local db user using github's identifier (login?)
    // const {id} = await getUserIdByProviderId(hashedIdent)
    // ident is on separate auth model by provider- userId is on that model
    //
    // const user = await getUserById(id)
    // get user by userId
    //
    // if (user) res.status(200).send(user)
  }
})

export default authRouter
