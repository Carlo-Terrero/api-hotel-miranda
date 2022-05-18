// var Author = require('../models/author'); Este seria el modelo de la tabla de la bbdd
var user = require('../data/user')//Los datos con lo que vamos a interactuar aqui

module.exports = {
    room_get: function(req, res){
        res.send(`Obtenemos todos los rooms desde controlles ${user}`);
    },
    
    room_getOne: function(req, res){
        res.send(`Obtenemos la room con el id ${req.params.id} desde controladores`)
    },
    
    room_post: function(req, res){
        res.send('Agregamos una room nuevo desde controladores');
    },
    
    room_delete: (req, res) => {
        res.send(`Eliminamos la room con el id ${req.params.id} desde controladores`)
    },
    
    room_put: (req, res) => {
        res.send(`Actualizamos la room con el id ${req.params.id} desde controladores`)
    }
}