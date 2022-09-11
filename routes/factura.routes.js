const FacturaController = require('../controllers/factura.controller');

module.exports = function(app){
    app.post('/api/factura/new', FacturaController.createFactura);
    app.get('/api/facturas', FacturaController.getAllFacturas);
    app.get('/api/factura/:id',FacturaController.getFactura);
    app.delete('/api/factura/:id', FacturaController.deleteFactura);
}