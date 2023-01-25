// Import mongoose
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        minLength: [1, "Can not be empty"]
    },
    price: {
        type: Number,
        min: [1, "Must be positive number"]
    },
    description: {
        type: String,
        minLength: [1, "Can not be empty"]
    }
}, { timestamps: true })

module.exports = mongoose.model("Product", ProductSchema)