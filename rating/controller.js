import productSchema from './model.js';
import { v4 as uuidv4 } from 'uuid';
import User from  '../rating/model.js'
import { sendNotification } from '../notification/controller.js';

mongoose.connect('mongodb://127.0.0.1:27017/RateDb')
const con = mongoose.connection

con.on('open',function(){
    console.log("Connected")
})

export const addProduct = async(req,res) => {
    const prodId = uuidv4()
    const product = new productSchema({
        prodId: prodId,
        userId: req.body.userId,
        review: req.body.review,
        rating: req.body.rating
    })
    await product.save()
    const prod = await Product.findOne({ userId: req.body.userId }).exec();
    if(!product){
        console.log("Not found")
    }
    prod.Product.push(userId)
    await product.save()
    const msg = {
        title: "success",
        msg: prodId
    }
    res.send(msg)

}
export const getProduct = async (req, res) => {
    const prodId = req.body.prodid;

    try {
        const product = await productSchema.find({ prodId: prodId }).exec();
        res.send(product);
    } catch (err) {
        console.error('Error:', err);
    }
}