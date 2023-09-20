import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    review: {
        type: String,
        required: true
    },
    ratings: {
        type: Number,
        required: true
    }
});

const productSchema = new mongoose.Schema({
    prodId : {
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    sellerId:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    reviewAndRatings: {
        type: reviewSchema, 
        required: true
    }
})

export { productSchema };
export default mongoose.model("Product",productSchema , "prodDb");