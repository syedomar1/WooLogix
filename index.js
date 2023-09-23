import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { Server as SocketServer } from 'socket.io';
import http from 'http';


import userRoutes from "./users/routes.js"
import prodRoutes from "./products/routes.js"

const app = express()
// const server = http.createServer(app);
// const io = new SocketServer(server);
  
//specify the port number
const PORT = 5000;

//to parse json objects in our app
app.use(bodyParser.json())

//initial route
app.get("/",(req,res)=>{
    res.send("Initial route(Home Page)")
})

//Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use("/user",userRoutes)
app.use("/product",prodRoutes)