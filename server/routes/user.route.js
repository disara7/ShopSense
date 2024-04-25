const { updateUser } = require("../controllers/user.controller");
const verifyToken = require("../middleware/verifyToken");

const router = require("express").Router();

router.get("/get-user", (req,res)=>{
    res.send("got user");
})

router.put("/update/:id", verifyToken, updateUser);
module.exports = router;