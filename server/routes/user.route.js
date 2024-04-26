const { updateUser, deleteUser, getAdmin } = require("../controllers/user.controller");
const {verifyToken, verifyAdmin} = require("../middleware/verifyToken");

const router = require("express").Router();

router.get("/get-user", (req,res)=>{
    res.send("got user");
})

router.put("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyAdmin, deleteUser);
router.get("/get-admin/:id", verifyAdmin, getAdmin)
module.exports = router;