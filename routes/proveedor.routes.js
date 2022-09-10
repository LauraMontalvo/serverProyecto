const ProveedorController = require('../controllers/proveedor.controller');

module.exports = function(app){
    app.post('/api/proveedor/new', ProveedorController.createProveedor);
    app.get('/api/proveedores', ProveedorController.getAllProveedores);
    app.get('/api/proveedor/:id',ProveedorController.getProveedor);
    app.put('/api/proveedor/:id/',ProveedorController.updateProveedor);
    app.delete('/api/proveedor/:id', ProveedorController.deleteProveedor);
}