import express from 'express';
const router = express.Router();
import {createContact, sendMail, getContactAll, getContactOne, deleteContactone} from '../controlers/contact.js';
import {verifyToken} from "../utils/verifyToken.js"

//CREATE CONTACT & SEND MAIL
router.post('/', createContact, sendMail)
//GET CONTACT All
router.post('/get/all', verifyToken, getContactAll)
//GET CONTACT ONE
router.post('/get/one/:id', getContactOne)
//DELETE CONTACT ONE
router.delete('/delete/one/:id', deleteContactone)


export default router