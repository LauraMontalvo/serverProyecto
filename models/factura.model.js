const mongoose = require('mongoose');

const FacturaSchema = new mongoose.Schema({   
    nombreCliente: {
        type: String,
        required: [true, 'El nombre del cliente es obligatorio']
    },
    direccion: {
        type: String,
        required: [true, "Se requiere ingresar la dirección"],
    },
    telefono: {
        type: String,
        required: [true, "Se requiere ingresar el teléfono"],
    },
    total: {
        type: String,
        required: [true, 'Se requiere ingresar un valor al total de la compra']
    }
});

const Factura = mongoose.model('Factura', FacturaSchema);
module.exports = Factura;