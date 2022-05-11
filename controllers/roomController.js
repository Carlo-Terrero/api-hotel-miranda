// var Author = require('../models/author'); Este seria el modelo de la tabla de la bbdd
var user = require('../data/user')//Los datos con lo que vamos a interactuar aqui

module.exports = {
    room_get: (req, res) => {
        return res.json({Response: `Obtenemos todos los rooms desde controlles ${user}`});
    },

    room_getOne: (req, res) => {
        return res.json({Response: `Obtenemos la room con el id ${req.params.id} desde controladores`})
    },

    room_post: (req, res) => {
        return res.json({Response: 'Agregamos una room nuevo desde controladores'});
    },

    room_delete: (req, res) => {
        return res.json({Response: `Eliminamos la room con el id ${req.params.id} desde controladores`})
    },

    room_put: (req, res) => {
        return res.json({Response: `Actualizamos la room con el id ${req.params.id} desde controladores`})
    }
}