import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import cors from "cors";
import mongoose from 'mongoose'
import newsletterRoute from './routes/newsletter.js';
import authRoute from './routes/auth.js'
import contactRoute from './routes/contact.js'
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(bodyParser.json());


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'build'))); 

//mongoose connection
const connection = async () => {
    try{
        await mongoose.connect(process.env.DB_URL);
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
app.use(cors({origin:"http://localhost:3000", credentials: true}));

app.use('/api/auth', authRoute)
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

// Serve index.html for any other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})


app.listen(process.env.PORT, () => {
  connection();
  console.log(`server running on port ${process.env.PORT}` )
})


