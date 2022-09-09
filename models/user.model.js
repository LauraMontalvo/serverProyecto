const mongoose = require('mongoose');

const AcountSchema = new mongoose.Schema({
    
    NombreUsuario: {
        type:  String,
        required: [true, 'Username is mandatory'],
        minlength: [3,"Se neceita mas de 3 caracteres"]
    },
   
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val), 
            message: "Invalid email"
        }
    },
    password: {
        type: String,
        required: [
        true, "Password is required"
        ],
        minlength: [3, "Password must be at least 3 chars"]
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