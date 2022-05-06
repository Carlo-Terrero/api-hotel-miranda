// var Author = require('../models/author'); Este seria el modelo de la tabla de la bbdd
var user = require('../data/user')

exports.user_get = function(req, res){
    res.send(`Obtenemos todos los users desde controlles ${user}`);
};

exports.user_getOne = (req, res) => {
    res.send(`Obtenemos el user con el id ${req.params.id} desde controladores`)
}

exports.user_post= function(req, res){
    res.send('Agregamos un user nuevo desde controladores');
};

exports.user_delete = (req, res) => {
    res.send(`Eliminamos el user con el id ${req.params.id} desde controladores`)
}

exports.user_put = (req, res) => {
    res.send(`Actualizamos el user con el id ${req.params.id} desde controladores`)
}