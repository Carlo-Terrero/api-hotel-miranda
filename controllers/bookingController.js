// var Author = require('../models/author'); Este seria el modelo de la tabla de la bbdd
var user = require('../data/user') // Los datos con lo que vamos a interactuar aqui

module.exports = {
    booking_get: (req, res)=> {
        return res.json({Response:`Obtenemos todos los booking desde controlles ${user}`});
    },

    booking_getOne: (req, res) => {
        return res.json({Response:`Obtenemos el booking con el id ${req.params.id} desde controladores`})
    },

    booking_post: (req, res) => {
        return res.json({Response:'Agregamos un booking nuevo desde controladores'});
    },

    booking_delete: (req, res) => {
        return res.json({Response:`Eliminamos el booking con el id ${req.params.id} desde controladores`})
    },

    booking_put: (req, res) => {
        return res.json({Response:`Actualizamos el booking con el id ${req.params.id} desde controladores`})
    }
}