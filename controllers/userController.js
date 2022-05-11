// var Author = require('../models/author'); Este seria el modelo de la tabla de la bbdd
var user = require('../data/user')

//const BDMySQL = require()

module.exports = {
    user_get: (req, res) =>{
        //res.send(`Obtenemos todos los users desde controlles ${JSON.stringify (user)}`);
        return res.json({ data: 'datos', result: user});
    },

    user_getOne: (req, res) => {
        return res.json({user: 'datos user'})
    },

    user_post: (req, res) => {
        return res.json({Response: 'Agregamos un user nuevo desde controladores'});
    },

    user_delete: (req, res) => {
        return res.json({Response: `Eliminamos el user con el id ${req.params.id} desde controladores`})
    },

    user_put: (req, res) => {
        return res.json({Response: `Actualizamos el user con el id ${req.params.id} desde controladores`})
    }
}