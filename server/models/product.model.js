// Import mongoose
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        minLength: [2, "Title must be 2 or more characters"],
        required: true
    },
    price: {
        type: Number,
        min: [0, "Price must be positive number"],
        required: true
    },
    description: {
        type: String,
        minLength: [1, "Description can not be empty"]
    }
}, { timestamps: true })

module.exports = mongoose.model("Product", ProductSchema)