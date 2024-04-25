const router = require("express").Router();
const User = require("../models/user.model");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
    try {
        const hashedPassword = bcrypt.hashSync(req.body.password, 10)
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });

        await newUser.save();

        const {password, ...info} = newUser;
        res.status(200).json({
            message: "User created successfully!",
            data: info,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "User creation failed!",
            error: error,
        });
    }
});

module.exports = router;