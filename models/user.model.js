const mongoose = require('mongoose');

const AcountSchema = new mongoose.Schema({
    
    NombreUsuario: {
        type:  String,
        required: [true, 'EL nombre de Usuario es Obligatorio!'],
        minlength: [3,"Se necesita mas de 3 caracteres"]
    },
   
    email: {
        type: String,
        required: [true, "Correo electronico es requerido"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val), 
            message: "Invalid email"
        }
    },
    password: {
        type: String,
        required: [
        true, "Se requiere Contraseña"
        ],
        minlength: [3, "La contraseña debe tener al menos 3 caracteres!!"]
        }
}, { timestamps: true });
        
AcountSchema.virtual('confirmPassword')
.get( () => this._confirmPassword )
.set( value => this._confirmPassword = value );

AcountSchema.pre('validate', function(next) {
    console.log(this.password ,this.confirmPassword)
    if (this.password != this.confirmPassword) {
    this.invalidate('confirmPassword', 'Password must match!');
    }
    next();
    });

const Acount = mongoose.model('Acount', AcountSchema);

module.exports = Acount;

