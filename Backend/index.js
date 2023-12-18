import express  from "express";
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from "cookie-parser";
import authRoute from './routes/auth.js'
import bookingRoute from './routes/booking.js'
import contactRoute from './routes/contact.js'

dotenv.config()
const app = express()
const port = process.env.PORT || 8000
const corsOptions ={
    origin:true,
    credentials:true
}

mongoose.set('strictQuery', false);
const connect = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
    })
    console.log('MongoDB connected');

   } catch (error) {
       console.log('MongoDB connected failed');
   }
}

app.get('/', (req,res) =>{
    res.send("Api is working");
})

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

app.use('/api/v1/auth', authRoute);
app.use('/api/v1/booking', bookingRoute);
app.use('/api/v1/contact', contactRoute);

app.listen(port, () => {
    connect();
    console.log('server listening on port', port);
 })