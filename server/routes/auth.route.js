const router = require("express").Router();
const User = require("../models/user.model");

router.post("/register", async (req, res) => {
    try {
        const newUser = new User({
            user
        })
        
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;