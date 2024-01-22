import express from "express"
// import {PORT,mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import router from "./routes/vendorroute.js";
import dotenv from "dotenv";
import cors from 'cors';

const app=express();
app.use(cors());
app.use(express.json());
dotenv.config();
mongoose.connect(process.env.mongoDBURL)
.then(()=>{
console.log('app is connected to database')
app.listen(process.env.PORT,()=>
{
    console.log(`app is listening to port:${process.env.PORT}`);

});
})
.catch((error)=>{
console.log(error);
});

app.get("/",(req,res)=>{   
    console.log("hello world");
    return res.status(234).send("Welcome to MERN Stack");
});

app.use('/vendors',router);