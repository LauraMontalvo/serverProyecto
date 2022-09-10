const mongoose = require('mongoose');

const DetalleSchema = new mongoose.Schema({   
    idFactura: {
        type: String,
        required: [true, 'El numero de factura es obligatorio']
    },
    nombreProducto: {
        type: String,
        required: [true, "Se requiere ingresar el nombre del producto"],
    },
    cantidad: {
        type: String,
        required: [true, "Se requiere ingresar la cantidad"],
    },
    subtotal: {
        type: String,
        required: [true, 'Se requiere ingresar un valor al subtotal']
    }
});

const Detalle = mongoose.model('Detalle', DetalleSchema);
module.exports = Detalle;