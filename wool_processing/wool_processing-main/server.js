import mongoose from "mongoose";

const woolProcessingSchema = new mongoose.Schema({
    sno:{
        type:Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    reviews: [{
        review: String,
        ratings: Number,
        required: true
    }]
});

export default mongoose.model("WoolProcessing", woolProcessingSchema, "wool_processing");
