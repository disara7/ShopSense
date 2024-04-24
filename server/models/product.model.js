const mongoose = require("mongoose");
const {Schema} = mongoose;

const productModel = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
        unique: true,
    },
    image: {
        type: String,
        required: true,
    },
    categories: {
        type: Array,
        default: [],
    },
    size: {
        type: String,
    },
    color: {
        type: String,
    },
    price: {
        type: String,
    },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Product", productModel);