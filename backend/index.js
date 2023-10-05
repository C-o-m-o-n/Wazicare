import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import doctorRoutes from "./routes/doctor.js";

dotenv.config();
const app = express();

//Middlewares
app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors({
  origin: ['http://localhost:3000', 'https://localhost:5000'],
  credentials: true
}));
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/doctors', doctorRoutes)

//Routes
app.get('/', (req,res) => {
  res.send('Home Page')
});


// Connect to DB and start server
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`)
  })
}).catch((err) => console.log(err))