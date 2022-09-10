const Detalle = require('../models/detalle.model');

module.exports.createDetalle = (request, response) =>{
    const {idFactura, nombreProducto, cantidad, subtotal} = request.body;
    console.log(request.body)
    Detalle.create({
        idFactura, nombreProducto, cantidad, subtotal
    })
    .then(detalle => response.json({insertedDetalle: detalle, msg: 'Succesful insertion'}))
    .catch(err => response.status(400).json(err));
}

module.exports.getAllDetalles = (_,response) =>{
    Detalle.find({})
    .then(retrievedDetalles => response.json(retrievedDetalles))
    .catch(err => response.json(err))
}

module.exports.getDetalle = (request, response) =>{
    Detalle.findOne({_id: request.params.id})
    .then(detalle => response.json(detalle))
    .catch(err => response.json(err))
}