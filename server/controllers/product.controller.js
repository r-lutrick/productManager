// Import model
const Product = require('../models/product.model')

// Create
module.exports.addProduct = (req, res) => {
    Product.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

// Read
module.exports.allProducts = (req, res) => {
    Product.find()
        .then(data => res.json(data))
        .catch(err => res.json(err))
}