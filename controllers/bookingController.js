// var Author = require('../models/author'); Este seria el modelo de la tabla de la bbdd
var user = require('../data/user') // Los datos con lo que vamos a interactuar aqui

exports.booking_get = function(req, res){
    res.send(`Obtenemos todos los booking desde controlles ${user}`);
};

exports.booking_getOne = (req, res) => {
    res.send(`Obtenemos el booking con el id ${req.params.id} desde controladores`)
}

exports.booking_post= function(req, res){
    res.send('Agregamos un booking nuevo desde controladores');
};

exports.booking_delete = (req, res) => {
    res.send(`Eliminamos el booking con el id ${req.params.id} desde controladores`)
}

exports.booking_put = (req, res) => {
    res.send(`Actualizamos el booking con el id ${req.params.id} desde controladores`)
}