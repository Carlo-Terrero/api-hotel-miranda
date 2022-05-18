// var Author = require('../models/author'); Este seria el modelo de la tabla de la bbdd
var user = require('../data/user')

module.exports = {
   user_get: (req, res) => {
        res.send(`Obtenemos todos los users desde controlles ${JSON.stringify (user)}`);
    },
    
    user_getOne: (req, res) => {
        res.send(`Obtenemos el user con el id ${req.params.id} desde controladores`)
    },
    
    user_post: (req, res) => {
        res.send('Agregamos un user nuevo desde controladores');
    },
    
    user_delete: (req, res) => {
        res.send(`Eliminamos el user con el id ${req.params.id} desde controladores`)
    },
    
    user_put: (req, res) => {
        res.send(`Actualizamos el user con el id ${req.params.id} desde controladores`)
    }
}
