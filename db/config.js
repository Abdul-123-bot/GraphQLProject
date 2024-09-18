const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/test",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("connected to db");
}).catch(err => console.error('Could not connect to MongoDB...', err));
