const Factura = require('../models/factura.model');

module.exports.createFactura = (request, response) =>{
    const {nombreCliente, direccion, telefono, total} = request.body;
    console.log(request.body)
    Factura.create({
        nombreCliente, direccion, telefono, total
    })
    .then(factura => response.json({insertedFactura: factura, msg: 'Succesful insertion'}))
    .catch(err => response.status(400).json(err));
}

module.exports.getAllFacturas = (_,response) =>{
    Factura.find({})
    .then(retrievedFacturas => response.json(retrievedFacturas))
    .catch(err => response.json(err))
}

module.exports.getFactura = (request, response) =>{
    Factura.findOne({_id: request.params.id})
    .then(factura => response.json(factura))
    .catch(err => response.json(err))
}

module.exports.deleteFactura = (request, response) =>{
    Factura.deleteOne({_id: request.params.id})
    .then(facturaDeleted => response.json(facturaDeleted))
    .catch(err => response.json(err))
}