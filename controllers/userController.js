// var Author = require('../models/author'); Este seria el modelo de la tabla de la bbdd
var user = require('../data/user')
const User = require('../models/user')

module.exports = {
   user_get: async (req, res, next) => {
       
        try{
            const result = await User.find();
            res.status(200).json({result})
        }catch(error){
            next(error)
        }
    //res.send(`Obtenemos todos los users desde controlles ${JSON.stringify (user)}`);
    },
    
    user_getOne: (req, res, next) => {
        res.send(`Obtenemos el user con el id ${req.params.id} desde controladores`)
    },
    
    user_post: (req, res, next) => {
        res.send('Agregamos un user nuevo desde controladores');
    },
    
    user_delete: (req, res, next) => {
        res.send(`Eliminamos el user con el id ${req.params.id} desde controladores`)
    },
    
    user_put: (req, res, next) => {
        res.send(`Actualizamos el user con el id ${req.params.id} desde controladores`)
    }
}
