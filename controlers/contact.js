import Contact from '../models/contact.js'
import { createError } from '../utils/createError.js';
import nodemailer from 'nodemailer';

export const createContact = async (req, res, next) => {
    const {
        fName,
        lName,
        email,
        phone,
        address,
        city,
        state,
        zip,
        checkboxOne,
        checkboxTwo,
        message,
      } = req.body;

      try {
        const newContact = new Contact({
            name: fName + " " + lName,
            email,
            phone,
            address,
            city,
            state,
            zip,
            checkboxOne, 
            checkboxTwo, 
            message
        })

        const savedContact = await newContact.save();
        res.status(201).json("sucessfully saved contact")
        next()
      } catch (error) {
        next(createError(401, error))
      }
}

export const sendMail = async (req, res, next) => {
  try {
    const {
      fName,
      lName,
      email,
      phone,
      address,
      city,
      state,
      zip,
      checkboxOne,
      checkboxTwo,
      message,
    } = req.body;

    if (!fName || !email || !city) {
      return res.status(400).send("Missing required fields");
    }

    const mailOptions = {
      from: email,
      to: "ronlfields@gmail.com",
      subject: "New form submission",
      text: `Name: ${
        fName + " " + lName
      }\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}\nCity: ${city}\nState ${state}\nZip Code: ${zip}\nTerms1: ${checkboxOne}\nTerms2: ${checkboxTwo}\nMessage: ${message}`,
    };

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASSWORD,
      },
    });

    await transporter.sendMail(mailOptions);
    req.name = fName + " " + lName;
    req.email = email;
    req.cat = 'reaching out to us';
    next();
    // res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error sending email");
  }
};



//GET ALL CONTACT
export const getContactAll = async (req, res) => {
  try {
    const allContact = await Contact.find().sort({_id: -1});
    res.status(200).json(allContact)
  } catch (error) {
    console.log(error)
  } 
}

//GET ONE CONTACT
export const getContactOne = async (req, res) => {
  try {
    const oneContact = await Contact.find({_id: req.params.id})
    res.status(200).json(oneContact)
  } catch (error) {
    console.log(error)
  }
}

//DELETE ONE CONTACT
export const deleteContactone = async (req, res) => {
  try {
    const deleteContact = await Contact.findByIdAndDelete({_id: req.params.id})
    res.status(200).json('Sucessfully deleted')
  } catch (error) {
    console.log(error)
  }
}
