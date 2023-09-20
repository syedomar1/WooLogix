import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    shopName: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    ratings: {
        type: Number
    },
    ordersSold: {
        type: [String]
    },
    ordersRec: {
        type: [String]
    },
    desc: {
        type: String,
        required: true
    },
    password: {
        type: String, 
        required: true
    }
});

export { userSchema };
export default mongoose.model("User", userSchema, "userDb");
