const mongoose=require("mongoose");


const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        default:"productName"
    },
    description:{
        type:String,
        default:"This is the product description"
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true,
        default:"productimage.jpeg"
    },
    category:{
        type:String,
        required:true
    }
  

})


module.exports=mongoose.model("Product",productSchema);