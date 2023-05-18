import path from 'path'
import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';

export const WelcomeEmail = (req, res, next) => {
  const {name, email, cat} = req
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.AUTH_EMAIL,
      pass: process.env.AUTH_PASSWORD
    }
  });
  
  const handlebarOptions = {
    viewEngine: {
      extName: ".handlebars",
      partialsDir: path.resolve('./views'),
      defaultLayout: false,
    },
    viewPath: path.resolve('./views'),
    extName: ".handlebars",
  }
  
  transporter.use('compile', hbs(handlebarOptions));
  
  var mailOptions = {
    from: process.env.AUTH_EMAIL,
    to: email,
    subject: 'Welcome to Five Star Estate Liquidations - Exclusive Updates, Insights, and Offers Await!',
    template: 'email',
    context: {
      name: name,
      cat: cat
    }
  
  };
  
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      next(error);
    }
     else {
      console.log('Email sent: ' + info.response);
    }
  });
}