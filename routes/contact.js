import express from 'express'
const router = express.Router();
import {createContact, sendMail, getContactAll, getContactOne, deleteContactone} from '../controlers/contact.js'

//CREATE CONTACT & SEND MAIL
router.post('/', createContact, sendMail)
//GET CONTACT All
router.get('/get/all', getContactAll)
//GET CONTACT ONE
router.get('/get/one/:id', getContactOne)
//DELETE CONTACT ONE
router.delete('/delete/one/:id', deleteContactone)


export default router