const Proveedor = require('../models/proveedor.model');

module.exports.createProveedor = (request, response) =>{
   
    const {nombre, telefono, direccion, ruc} = request.body;
    console.log(request.body)
    Proveedor.create({
        nombre, telefono, direccion, ruc
    })
        .then(proveedor => response.json({insertedProveedor: proveedor, msg: 'Succesful creation'}))
        .catch(err => response.status(400).json(err));
}

module.exports.getAllProveedores = (_,response) =>{
    Proveedor.find({})
    .then(retrievedProveedores => response.json(retrievedProveedores))
    .catch(err => response.json(err))
}

module.exports.getProveedor = (request, response) =>{
    Proveedor.findOne({_id: request.params.id})
    .then(proveedor => response.json(proveedor))
    .catch(err => response.json(err))
}

module.exports.updateProveedor = (request, response) =>{
    Proveedor.findOneAndUpdate({_id: request.params.id}, request.body, {new: true})
    .then(updateProveedor => response.json(updateProveedor))
    .catch(err => response.json(err))
}

module.exports.deleteProveedor = (request, response) =>{
    Proveedor.deleteOne({_id: request.params.id})
    .then(ProveedorDeleted => response.json(ProveedorDeleted))
    .catch(err => response.json(err))
}
