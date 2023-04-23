const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require("nodemailer");
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'build'))); 

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.post("/send-email", (req, res) => {
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
    to: "jhgangs.entertainment@gmail.com",
    subject: "New form submission",
    text: `Name: ${
      fName + " " + lName
    }\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}\nCity: ${city}\nState ${state}\nZip Code: ${zip}\nTerms1: ${checkboxOne}\nTerms2: ${checkboxTwo}\nMessage: ${message}`,
  };
  console.log(process.env.USER);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "alifahmeddeveloper@gmail.com",
      pass: "fumdyxrickfuacvq",
    },
  });

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).send("Error sending email");
    } else {
      console.log(info.response);
      return res.status(200).send("Email sent successfully");
    }
  });
});

app.post('/newsletter', (req, res) => {
  console.log(req.body)
})

const PORT = 8800;
app.listen(PORT, () => {
  console.log('server running on port ' + PORT)
})