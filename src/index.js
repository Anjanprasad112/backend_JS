// require('dotenv').config({
//     path : './env'
// })
import dotenv from "dotenv";
dotenv.config({
    path:'./env'
})
import mongoose from "mongoose";
import connectDB from './db/index.js'
connectDB();










// import express from 'express';
// const app = express();
// (async()=>{
//     try{
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//        app.on("error",(err)=>{
//         console.log("Error : ",err);
//         throw err;
//        })
//        app.listen(process.env.PORT,()=>{
//         console.log(`App is listening on port ${process.env.PORT}`)
//        })


//     }catch(err){
//         console.error(err)
//         throw err;
//     }
// })()




