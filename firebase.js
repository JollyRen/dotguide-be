import dotenv from 'dotenv'
dotenv.config()
import { initializeApp, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import cred from './serviceAccountKey.json' with { type: 'json' }
// let cred = JSON.stringify(JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON))
// console.log(cred)
const fbApp = initializeApp({
  credential: cert(cred)
})

const db = getFirestore()

export { fbApp, db }
