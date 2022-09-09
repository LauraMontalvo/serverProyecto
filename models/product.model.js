
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    precio: {
        type: String,
        required: [true, "Se requiere ingresar el precio del producto"],
    },
    cantidad: {
        type: String,
        required: [true, "Se requiere ingresar cantidad del producto"],
    },
    tipo: {
        type: String,
        required: [true, 'Tipo de producto es obligatorio']
    }
});

const Product = mongoose.model('Product', UserSchema);
module.exports = Product;