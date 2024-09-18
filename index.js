const express = require('express');
const cors = require('cors');
const db = require('./db/config');

const User = require('./db/User');
const app = express();
app.use(express.json());
app.use(cors());

app.get("",async (req,res)=>{
    const user = await User.find();
    //console.warn(db);
    res.send(user);
})
app.post("/login",async(req,res)=>{
    const user = req.body;
    const users_db = await User.findOne(user.body).select("-password");
    console.log(users_db)
    res.send(users_db)
})
app.post("/register", async(req, res)=>{
    const user_data = req.body;
    const user = await new User(user_data);
    const result = await user.save();
    console.warn(result);
    res.send(result);
})

app.listen(5003);