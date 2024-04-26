const user = require("../models/user.model.js");

const updateUser = async (req,res)=>{
    try {
        const updatedUser = await user.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {
            new: true,
        });
        if (!updatedUser){
            return res.status(404).json({
                message: "User not found"
            })
        }
        res.status(200).json({
            message: "User has been updated successfully!",
            data: updatedUser,
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "User update failed!",
            error: err,
        })
    }
};

const deleteUser = async (req, res) => {
    try {
        await user.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: "User has been deleted successfully!",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Failed to delete user!",
        });
    }
};


module.exports = {
    updateUser,
    deleteUser,
};