const router = require("express").Router();

router.get("/get-user", (req,res)=>{
    res.send("got user");
})
module.exports = router;