const DetalleController = require('../controllers/detalle.controller');

module.exports = function(app){
    app.post('/api/detalle/new', DetalleController.createDetalle);
    app.get('/api/detalles', DetalleController.getAllDetalles);
    app.get('/api/detalle/:id',DetalleController.getDetalle);
}