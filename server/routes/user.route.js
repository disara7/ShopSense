const { updateUser, deleteUser, getAdmin, getAllUsers } = require("../controllers/user.controller");
const {verifyToken, verifyAdmin} = require("../middleware/verifyToken");

const router = require("express").Router();

router.get("/get-user", (req,res)=>{
    res.send("got user");
})

router.put("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyAdmin, deleteUser);
router.get("/get-admin/:id", verifyAdmin, getAdmin);
router.get("/", verifyToken, getAllUsers);

module.exports = router;