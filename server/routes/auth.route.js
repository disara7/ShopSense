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

        const {password, ...info} = newUser._doc;
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

router.post("/login", async (req, res)=>{

    try {
        const { email, password } = req.body;

        const user = await User.findOne({email: email});
        if (!user) {
            return res.status(404).json({
                message: "Email does not exist"
            })
        }

        const comparedPassword = await bcrypt.compare(password, user.password);
        if (!comparedPassword) {
            return res.status(404).json({
                message: "Incorrect email or password"
            })
        }
        res.status(200).json({
            data: user,
            message: "Login successful!",
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Login failed",
            error: error,
        })  
    }
    
});

module.exports = router;