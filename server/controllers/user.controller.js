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

const getAdmin = async (req, res) => {
    try {
        const admin = await User.findById(req.params.id);
        if (!admin) {
            return res.status(404).json({
                message: "Admin not found",
            });
        }
        const { password, ...info } = admin._doc;
        res.status(200).json({
            message: "Admin detected",
            data: info,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Query failed",
            error: error,
        });
        
    }

};

const getAllUsers = async (req, res) => {
    const query = req.query.latest;
    try {
        const users = query 
        ? await User.find().sort({_id: -1 }).limit(3) 
        : await User.find();

        const { password, ...info } = users._doc;
        res.status(200).json({
            message: "Users successfully detected",
            data: users,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Query failed",
            error: error,
        });
    }
};

const getUserStats = async (req, res) => {
    try {
        const date = new Date();
        const lastYear = new Date(date.setFullYear(date.getFullYear() -1));

        const userStats = await User.aggregate([
            {
                $match: {createAt: {$get: lastYear}},
            },
            {
                $project: {
                    month: {$month: "$createdAt"},
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: {$sum: 1},
                },
            }
        ]);
        res.status(200).json({
            message: "User Data Retrieval Successful!",
            userStats
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "User status acquisition error!",
            error: error.message
        })
        
    }
}

module.exports = {
    updateUser,
    deleteUser,
    getAdmin,
    getAllUsers,
    getUserStats,
};