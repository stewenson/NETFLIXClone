const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");


/* 
* REGISTER
*/
router.post("/register", async(req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
                req.body.password, 
                process.env.SECRET_KEY
                ).toString(),
        });

    try {
        const user = await newUser.save();
        res.status(201).json(user)
    } catch (err) {
        res.status(500).json(err);
    }});

/*
* LOGIN
*/
router.post("/login", async(req, res) => {
    try {
        const user = await User.findOne({email: req.body.email})                    // try find user by email
        !user && res.status(401).json("Wrong password or username!")
        
        const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY); // encrypt password
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

        originalPassword !== req.body.password &&                                   // compare password
            res.status(401).json("Wrong password or username!")

        const accessToken = jwt.sign(                                              // JWT token
            { id: user._id, isAdmin: user.isAdmin },
            process.env.SECRET_KEY,{ expiresIn: "5d" }
        );

        const {password, ...info} = user._doc;                                      // Separate password from, password wont be visible in json

    res.status(200).json({...info, accessToken})

    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;