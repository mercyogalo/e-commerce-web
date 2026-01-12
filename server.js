const express=require("express");
const dotenv=require("dotenv");
const cors=require("cors");
const mongoose=require("mongoose");

const app=express();

dotenv.config();
app.use(cors());
app.use(express.json());

const PORT=process.env.PORT||5000;

mongoose.connect(process.env.MONGO_URI,{})
.then(()=>console.log("Mongodb running"))
.catch((err)=>console.log("The error is:",err))

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})