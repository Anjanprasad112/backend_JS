// require('dotenv').config({
//     path : './env'
// })
import dotenv from "dotenv";
dotenv.config({
  path: "./env",
});
import mongoose from "mongoose";
import app from "./app.js";
import connectDB from "./db/index.js";
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(
        `server is running at port : http://localhost:${process.env.PORT}`
      );
    });
  })
  .catch((e) => {
    console.log("MONGO db connection failed!! : ", e);
  });

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
