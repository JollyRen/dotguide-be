/**
 * PROFILE (in firestore):
 *
 * displayName:   text (20 Chars) (from: Firebase - default is email before @)
 * firstName:     text (25 chars)*
 * lastName:      text (25 chars)*
 * uid:           string (from: firebase)
 * email:         string (from: firebase)
 * about:         text(2000 chars)*
 * banned:        boolean (default false)
 * deleted:       boolean (default false)
 * warnings:      Array[String] (default empty array)
 * createdAt:     ISO date UTC -> to locale on parsing (from: Firebase)
 * organizations: Array[UID<String> orgUid]
 * admin:         boolean (default false)
 * followers:     Array[UID<String> userUid] (default empty array)
 * following:     Array[UID<String> userUid] (default empty array)
 * bookmarks:     Array[UID<String> guideUid] (default empty array)
 * tags:          Array[UID<String> tagUid] (default empty array)
 *
 *    * == optional (or blank string)
 */

import { db } from '../firebase.js'
