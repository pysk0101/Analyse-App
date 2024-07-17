//Node Module Imports
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/database-connection';
import cookieParser from 'cookie-parser'
import path from 'path'
//Express App
const app = express();
dotenv.config();

//Connect to MongoDB
connectDB();

//Middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.use(express.json())
app.use(cookieParser());

//Import Routes
import examRouter from './routes/examRouter';
import authRouter from './routes/authRouter';
import userRouter from './routes/userRouter';
import dashboardRouter from './routes/dashboardRouter';
import pageRouter from './routes/pageRouter';

//Api Routes
app.use('/calculation', examRouter);
app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/dashboard', dashboardRouter);
app.use('/', pageRouter);

//Port
app.listen(5000, () => console.log('Server is running http://localhost:5000'));


//!Yapilmak isteneler
//? Error Handling
//? tim card api jwt ve auth yapisini incele
//? Daha iyi bir api yapisi
//? Kullanici rollendirme. ogrencinin alanina gore. frontend kisimlarini ona gore gostermece
//? 