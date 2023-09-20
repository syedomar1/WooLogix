import productSchema from './model.js';
import { v4 as uuidv4 } from 'uuid';
import User from  '../users/model.js'

export const addProduct = async(req,res) => {
    const prodId = uuidv4()
    const prod = new productSchema({
        prodId:prodId,
        name: req.body.name,
        image: req.body.image,
        sellerId: req.body.sellerId,
        desc: req.body.desc,
        price: req.body.price,
        reviewAndRatings: {
            review: req.body.reviewAndRatings.review,
            ratings: req.body.reviewAndRatings.ratings
        }
    })
    await prod.save()
    const user = await User.findOne({ userId: req.body.sellerId }).exec();
    if(!user){
        console.log("Not found")
    }
    user.ordersSold.push(prodId)
    await user.save()
    const msg = {
        title: "success",
        msg: prodId
    }
    res.send(msg)

}

export const getProduct = async (req, res) => {
    const prodId = req.body.id;

    try {
        const product = await productSchema.find({ prodId: prodId }).exec();
        res.send(product);
    } catch (err) {
        console.error('Error:', err);
    }
}

export const buyProduct = async (req, res) => {
    const prodId = req.body.prodId;
    const buyerId = req.body.buyerId;

    try {
        // Fetch the buyer data based on buyerId
        const buyer = await User.findOne({ userId: buyerId }).exec();

        if (!buyer) {
            // Handle the case when the buyer is not found
            return res.status(404).json({ message: 'Buyer not found' });
        }

        // Ensure that the buyer has an 'ordersRec' property initialized as an array
        if (!buyer.ordersRec) {
            buyer.ordersRec = [];
        }

        // Push the prodId to the 'ordersRec' array
        buyer.ordersRec.push(prodId);

        // Save the updated buyer data
        await buyer.save();

        const msg = {
            title: 'success',
            msg: prodId,
        };
        res.send(msg);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
