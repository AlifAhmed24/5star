import express from 'express';
import {createNewsletter, deleteNewsletter, getNewsletter} from '../controlers/newsletter.js'
import { WelcomeEmail } from '../controlers/sendMailTemp.js';
const router = express.Router();

//CREATE NEWSLETTER
router.post('/', createNewsletter, WelcomeEmail)
//GET NEWSLETTER
router.post('/get/all', getNewsletter)
//DELETE NEWSLETTER
router.delete('/delete/:id', deleteNewsletter) 

export default router;