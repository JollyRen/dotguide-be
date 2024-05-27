import { collection, getDocs } from 'firebase/firestore/lite'
import { db } from '../firebase.js'

export const getGuides = async () => {
  const guidesCol = collection(db, 'guides')
  const guideSS = await getDocs(guidesCol)
  const guideList = guideSS.docs.map((doc) => doc.data())
  return guideList
}
