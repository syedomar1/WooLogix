import express from 'express';
import { addProduct, buyProduct, getProduct } from './controller.js';

const router = express.Router()

//register product
router.post("/addProduct",addProduct)

//get prodcut
router.get('/getProduct',getProduct)

//buy product
router.post('/buyProduct',buyProduct)

export default router   