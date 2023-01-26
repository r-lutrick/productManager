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

// Read one
module.exports.oneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

// Update
module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

// Delete
module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(data => res.json(data))
        .catch(err => res.json(err))
}