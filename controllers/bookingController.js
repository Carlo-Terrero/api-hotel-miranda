// var Author = require('../models/author'); Este seria el modelo de la tabla de la bbdd
var user = require('../data/user') // Los datos con lo que vamos a interactuar aqui
const Booking = require('../models/booking');

exports.booking_get = function(req, res, next){

    Booking.find().exec((error, booking) => {
        if(error) return next(error);
        return res.status(200).json({booking})
    })
    //res.send(`Obtenemos todos los booking desde controlles ${user}`);
};

exports.booking_getOne = (req, res, next) => {

    let id = req.params.id;

    Booking.findById({_id: id}).exec((error, booking) => {
        if(error) return next(error);
        return res.status(200).json(booking)
    })
    //res.send(`Obtenemos el booking con el id ${req.params.id} desde controladores`)
}

exports.booking_post= function(req, res, next){
    res.send('Agregamos un booking nuevo desde controladores');
};

exports.booking_delete = (req, res, next) => {
    res.send(`Eliminamos el booking con el id ${req.params.id} desde controladores`)
}

exports.booking_put = (req, res, next) => {
    res.send(`Actualizamos el booking con el id ${req.params.id} desde controladores`)
}