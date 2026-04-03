/**
 *
 * GUIDE (in Firestore)
 *
 * title:           String (100 char)
 * uid:             String (Auto gen)
 * userUid:         String (from FS/FB user)
 * isPublished:     boolean (default false)
 * published:       ISO Date UTC to Locale or Null
 * favorites:       Array[UID<string> userUid]
 * description:     String (2000 char)
 * tags:            Array[UID<string> tag]
 * bookmarks:       Array[UID<string> userUid]
 * languages:       Array[UID<string> language]
 * frontEndTechs:   Array[UID<string> frontEndTech]
 * backEndTechs:    Array[UID<string> backEndTech]
 *
 */

import { db } from '../firebase.js'
import { v7 } from 'uuid' //may use instead of firestore uuid

const getGuidesByUserId = async (userId) => {
  try {
    let query = db.collection('guide')
    const _guides = await query
      .where('userUid', '==', userId)
      .where('isPublished', '==', true)
      .where('published', '!=', null)
      .get()
    const guides = []
    _guides.forEach((doc) => {
      guides.push(doc.data())
    })
    return guides
  } catch (error) {
    console.error(error)
  }
}

const getPublishedGuides = async () => {
  try {
    let query = db.collection('guide')
    const _guides = await query
      .where('isPublished', '==', true)
      .where('published', '!=', null)
      .get()
    const guides = []
    _guides.forEach((doc) => {
      guides.push(doc.data())
    })
    return guides
  } catch (error) {
    console.error(error)
  }
}

const getUnpublishedGuides = async () => {
  try {
    let query = db.collection('guide')
    const _guides = await query
      .where('isPublished', '==', false)
      .where('published', '==', null)
      .get()
    const guides = []
    _guides.forEach((doc) => {
      guides.push(doc.data())
    })
    return guides
  } catch (error) {
    console.error(error)
  }
}

const getNewPublishedGuides = async () => {
  try {
    let query = db.collection('guide')
    const _guides = await query
      .where('isPublished', '==', true)
      .where('published', '>=', $Date.now() - 86400000)
      .get()
    const guides = []
    _guides.forEach((doc) => {
      guides.push(doc.data())
    })
    return guides
  } catch (error) {
    console.error(error)
  }
}

export { getGuidesByUserId, getPublishedGuides, getUnpublishedGuides, getNewPublishedGuides }
