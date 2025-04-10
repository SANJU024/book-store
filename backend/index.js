import express from "express";
import { mongoDBURl } from "./config.js";
import{ PORT } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import bookRouter from "./Routes/bookRoutes.js";
import cors from "cors"

const app=express();
app.use(express.json());
app.use(cors());
app.use("/books",bookRouter);

app.listen(PORT,()=>console.log("running on port",PORT)
)

mongoose.connect(mongoDBURl)
.then(()=>{
    console.log("App connected to MongoDB");
})
.catch((err)=>{
    console.log(err);
    
})