import express from 'express'
const router = express.Router();
import {createContact, sendMail, getContactAll, getContactOne, deleteContactone} from '../controlers/contact.js'

//CREATE CONTACT
router.post('/', createContact)
//SEND MAIL
//GET CONTACT All
router.get('/get/all', getContactAll)
//GET CONTACT ONE
router.get('/get/one/:id', getContactOne)
//DELETE CONTACT ONE
router.delete('/delete/one/:id', deleteContactone)


export default router