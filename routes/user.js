const express=require("express");
const Router=express.Router();
const User=require("../models/User");
const protect=require("../middleware/auth");
const jwt=require("jsonwebtoken");
const generateToken=require("../Utils/token");


//register user
router.post('/register',async (req,res)=>{
    const {username,email,password}=req.body;

    try {
        if(!username || !password || !email){
            return res.status(400).json({message:"Please enter all fields"});
        }

        const userExists=await User.findOne({email});

        if(userExists){
            return res.status(400).json({message:"This user already exists"});
        }

        const user=await User.create({username,email,password});
        const token=generateToken(user._id);
        res.status(201).json({
            userID:user._id,
            username:user.username,
            email:user.email,
            token
        });

    } catch (error) {
        return res.status(500).json({message:"Server error"});
    }
});

