import admin, { initializeApp, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import serviceAccount from './creds.json'

initializeApp({ credential: cert(serviceAccount) })

export const db = getFirestore()

export default admin
