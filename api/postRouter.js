import { Router } from 'express'
const postRouter = Router()

postRouter.get('/', (req, res, next) => {
  // get all posts
  // if active, public, posts
  // query ? filter by "name includes" and paginate by offset, default offset == 0
})

postRouter.get('/user/:userId', (req, res, next) => {
  // get all posts from user
  // if !user, active, public, posts
  // if user, posts
})

postRouter.get('/:postId', (req, res, next) => {
  // get specific post
  // if !user, active, public, post
  // if user, post send it
})
postRouter.patch('/:postId', (req, res, next) => {
  // update post data (normal)
  // if user, data
})
postRouter.delete('/:postId', (req, res, next) => {
  // delete post
  // if user - make inactive
})
postRouter.patch('/favorite', (req, res, next) => {
  // add a favorite to posts' list users who have favorited
  // also, add to user's list of favorited posts
})
export default postRouter
