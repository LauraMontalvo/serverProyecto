const AcountController = require('../controllers/user.controller');

module.exports = function(app){

    app.post('/api/usuario/new',  AcountController.createAcount);
    app.get('/api/usuarios', AcountController.getAllAcounts);
    app.get('/api/usuario/:id', AcountController.getAcount);
    app.put('/api/usuario/:id/', AcountController.updateAcount);
    app.delete('/api/usuario/:id', AcountController.deleteAcount);
    app.post('/api/usuario/validate', AcountController.validateAccount);
}

