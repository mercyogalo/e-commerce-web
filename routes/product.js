const express=require("express");
const router=express.Router();
const Product=require("../models/Product");
const protect=require("../middleware/auth");


router.get('products',async (req,res)=>{
    try {
        const products=await Product.find();

        if(products.length===0){
            res.status(201).json({message:"Currently their are no products"});
        }

        res.status(200).json(products);
    } catch (error) {
        return res.status(500).json({message:"Server error"});
    }
});
