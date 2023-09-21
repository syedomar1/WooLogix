// Import necessary modules
import Notification from './model.js';


// Define a function to send notifications
export const sendNotification = async (recipient, message) => {
    try {
        // Create a notification
        const notification = new Notification({
            recipient:recipient,
            message:message,
            date: new Date(),
        });

        // Save the notification in the database
        await notification.save();

        // Emit the notification to the recipient's WebSocket (Socket.io)
        io.to(recipient).emit('notification', notification);

        console.log("Message sent")
    } catch (err) {
        console.error('Error:', err);
    }
};
