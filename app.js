import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import cors from "cors";
import mongoose from 'mongoose'
import newsletterRoute from './routes/newsletter.js';
import loginRoute from './routes/auth.js'
import contactRoute from './routes/contact.js'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(bodyParser.json());
app.use(cors());

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'build'))); 

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'))
// })

//mongoose connection
const connection = async () => {
    try{
        await mongoose.connect('mongodb+srv://AlifAhmed:mmSZpAOFwO1V9wdh@cluster0.jfw2gub.mongodb.net/5star?retryWrites=true&w=majority');
        console.log('Connected to mongoDB Database')
    } catch(err){
        throw err
    }
}

    mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
  })


//middleware
app.use(express.json());
app.use('/api/auth', loginRoute)
app.use('/api/contact', contactRoute)
app.use('/api/newsletter', newsletterRoute)

//ERROR HANDLER
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

const PORT = 8800;
app.listen(PORT, () => {
  connection();
  console.log('server running on port ' + PORT)
})
