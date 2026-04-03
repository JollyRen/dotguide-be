import { getGuidesByUserId, getPublishedGuides } from '../db/index.js'

const allPublishedGuides = async (req, res, next) => {
  const guides = await getPublishedGuides()
  guides.length === 0 ? res.status(200).send('No Guides') : res.status(200).send(guides)
}

const allUserGuides = async (req, res, next) => {
  const { userId } = req.params
  const guides = await getGuidesByUserId(userId)
  guides.length === 0 ? res.status(200).send('No Guides') : res.status(200).send(guides)
}

export { allPublishedGuides, allUserGuides }
