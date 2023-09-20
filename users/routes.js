import express from 'express';
import { getUser, loginUser, registerUser } from './controller.js';

const router = express.Router()

//registerUser
router.post("/register",registerUser)

//get user
router.get('/getuser',getUser)

//login user
router.get('/login',loginUser)
export default router