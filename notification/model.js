import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
    recipient: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// Export the Notification model directly
export default mongoose.model("Notification", notificationSchema, "notificationDb");
