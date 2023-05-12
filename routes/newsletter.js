import express from 'express';
import {createNewsletter, deleteNewsletter, getNewsletter} from '../controlers/newsletter.js'
const router = express.Router();

//CREATE NEWSLETTER
router.post('/', createNewsletter)
//GET NEWSLETTER
router.post('/get/all', getNewsletter)
//DELETE NEWSLETTER
router.delete('/delete/:id', deleteNewsletter) 

export default router;