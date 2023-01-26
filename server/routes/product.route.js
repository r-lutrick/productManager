// Import controller
const Product = require('../controllers/product.controller')

module.exports = (app) => {
    // Format
    // app.post/get/put/delete
    
    // Create
    app.post("/api/product/create", Product.addProduct)

    // Read
    app.get("/api/product/get", Product.allProducts)

    // Read One
    app.get("/api/product/get/:id", Product.oneProduct)

    // Update
    app.put("/api/product/update/:id", Product.updateProduct)

    //Delete
    app.delete("/api/product/delete/:id", Product.deleteProduct)
}