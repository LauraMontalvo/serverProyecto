
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({

    
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

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;