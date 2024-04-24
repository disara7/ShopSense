const router = require("express").Router();
const User = require("../models/user.model");

router.post("/register", async (req, res) => {
    try {
        const newUser = new User({
            user //6:40 https://youtu.be/kG9bhjuk6H8?si=DhbDndadXpgHdnHI
        })
        
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;