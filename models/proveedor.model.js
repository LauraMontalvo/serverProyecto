const mongoose = require('mongoose');

const ProveedorSchema = new mongoose.Schema({   
    nombreProveedor: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    telefonoProveedor: {
        type: String,
        required: [true, "Se requiere ingresar el telefono del proveedor"],
    },
    direccionProveedor: {
        type: String,
        required: [true, "Se requiere ingresar la dirección del proveedor"],
    },
    rucProveedor: {
        type: String,
        required: [true, 'Se requiere ingresar el ruc del proveedor ']
    }
});

const Proveedor = mongoose.model('Proveedor', ProveedorSchema);
module.exports = Proveedor;