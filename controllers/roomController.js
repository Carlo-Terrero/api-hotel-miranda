// var Author = require('../models/author'); Este seria el modelo de la tabla de la bbdd
var user = require('../data/user')//Los datos con lo que vamos a interactuar aqui

exports.room_get = function(req, res){
    res.send(`Obtenemos todos los rooms desde controlles ${user}`);
};

exports.room_getOne = (req, res) => {
    res.send(`Obtenemos la room con el id ${req.params.id} desde controladores`)
}

exports.room_post= function(req, res){
    res.send('Agregamos una room nuevo desde controladores');
};

exports.room_delete = (req, res) => {
    res.send(`Eliminamos la room con el id ${req.params.id} desde controladores`)
}

exports.room_put = (req, res) => {
    res.send(`Actualizamos la room con el id ${req.params.id} desde controladores`)
}