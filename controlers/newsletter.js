import Newsletter from '../models/newsletter.js'
import {createError} from '../utils/createError.js'

// CREATE NEWSLETTER
export const createNewsletter = async (req, res, next) => {
  try {
    const {name, email} = req.body
    const newNewsletter = new Newsletter({name, email})
    const savedNewsletter = await newNewsletter.save();
    res.status(200).json('Newsletter created')
  } catch (error) {
    next(createError(401, "something went wrong"))
  }
}

//DELETE NEWSLETTER
export const deleteNewsletter = async (req, res, next) => {
  try {
    const deleteNewsletter = await Newsletter.findByIdAndDelete(req.params.id)
    res.status(202).json('Sucessfully deleted newsletter')
  } catch (error) {
    next(createError(401, 'something went wrong to delete newsletter'))
  }
}

//GET ALL NEWSLETTER
export const getNewsletter = async (req, res, next) => {
  try {
    const newsletters = await Newsletter.find().sort({_id: - 1});
    res.status(200).json(newsletters)
  } catch (error) {
    next(createError(401, 'something went wrong to get newsletters'))
  }

}
