import User from './model.js';
import { v4 as uuidv4 } from 'uuid';

export const registerUser = async (req, res) => {
    const userId = uuidv4()
    const user = new User({
        userId: userId,
        name: req.body.name,
        shopName: req.body.shopName,
        location: req.body.location,
        desc: req.body.desc,
        password: req.body.password,
        ordersRec:[],
        ordersSold:[]
    })
    await user.save()
    const msg = {
        title: "success",
        msg: userId
    }
    res.send(msg)
}

export const getUser = async (req, res) => {
    const userId = req.body.id;

    try {
        const users = await User.find({ userId: userId }).exec();
        console.log('Users:', users);
        res.send(users);
    } catch (err) {
        console.error('Error:', err);
    }
}

export const loginUser = async (req, res) => {
    const userName = req.body.name;
    const passwd = req.body.passwd;
    try {
        const user = await User.findOne({ name: userName }).exec();
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        } else {
            const passwordMatch = user.password === passwd;

            if (passwordMatch) {
                res.send(user);
            } else {
                res.status(401).json({ message: "Incorrect password" });
            }
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
}

