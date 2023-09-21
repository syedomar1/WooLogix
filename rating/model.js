import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    review: {
        type: String,
        required: true
    },
    ratings: {
        type: Number,
        required: true
    },
    userId: {
        type: String,
        required: true
    }

});

const productSchema = new mongoose.Schema({
    prodId : {
        type:String,
        required:true
    },
    reviewAndRatings: {
        type: [reviewSchema], 
        required: true
    }
})

export { productSchema };
export default mongoose.model("Product",productSchema , "prodDb");