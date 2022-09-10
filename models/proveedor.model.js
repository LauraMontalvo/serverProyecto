const mongoose = require('mongoose');

const ProveedorSchema = new mongoose.Schema({   
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    telefono: {
        type: String,
        required: [true, "Se requiere ingresar el telefono del proveedor"],
    },
    direccion: {
        type: String,
        required: [true, "Se requiere ingresar la dirección del proveedor"],
    },
    ruc: {
        type: String,
        required: [true, 'Se requiere ingresar el ruc del proveedor ']
    }
});

const Proveedor = mongoose.model('Proveedor', ProveedorSchema);
module.exports = Proveedor;