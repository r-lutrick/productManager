// Import controller
const Product = require('../controllers/product.controller')

module.exports = (app) => {
    // Create
    app.post("/api/product/create", Product.addProduct)

    // Read
    app.get("/api/product/get", Product.allProducts)

    // Read One
    app.get("/api/product/get/:id", Product.oneProduct)
}