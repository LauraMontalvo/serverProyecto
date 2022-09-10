
const Acount = require('../models/user.model');

module.exports.createAcount = (req, res) => {
    const {NombreUsuario, email, password, confirmPassword } = req.body;
    console.log(req.body)
    Acount.create(
        {NombreUsuario,email, password, confirmPassword }
    )
        .then(acount => res.json({ insertedAcount: acount, msg: 'Successful creation' }))
        .catch(err => res.status(400).json(err))
}

module.exports.getAllAcounts = ( _ , res) => {
    Acount.find({})

        .then(retrievedAcounts => res.json(retrievedAcounts))
        .catch(err => res.json(err))
}

module.exports.getAcount = (req, res) => {

    Acount.findOne({_id:req.params.id})

        .then(acount=> res.json(user))
        .catch(err => res.json(err))
}

module.exports.updateAcount = (req, res) => {
    Acount.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})

        .then(updatedAcount => res.json(updatedAcount))
        .catch(err => res.json(err))
}

module.exports.deleteAcount = (req, res) => {
    Acount.deleteOne({ _id: req.params.id })

        .then(acountDeleted => res.json(acountDeleted))
        .catch(err => res.json(err))
}

module.exports.validateAccount = (req, res) => {
    Acount.findOne({NombreUsuario:req.body.NombreUsuario})
        .then((usuario) => {
            console.log(req.body);
            if(req.body.password === usuario.password){
                res.json({msg: 'Usuario validado correctamente!!'});
            }
            else {
                res.json({msg: 'Contraseña incorrecta, ingrese nuevamente!!'});
            }
        })
        .catch(err => res.json({err: err, msg: "Este usuario no Existe!"}));
}