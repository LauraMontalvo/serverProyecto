const ProductController = require('../controllers/product.controller');

module.exports = function(app){
    app.post('/api/producto/new', ProductController.createProduct);
    app.get('/api/productos', ProductController.getAllProducts);
    app.get('/api/producto/:id',ProductController.getProduct);
    app.put('/api/producto/:id/',ProductController.updateProduct);
    app.delete('/api/producto/:id', ProductController.deleteProduct);
}