const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

// mondo db connection
const mongose = require("mongoose");
mongose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    })
    .then(() => console.log("DB connection Successfull"))
    .catch((err) => console.log(err));

app.listen(8800, ()=>{
    console.log("backend server is running")
});