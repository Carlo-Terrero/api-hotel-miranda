// var Author = require('../models/author'); Este seria el modelo de la tabla de la bbdd
//var user = require('../data/user') // Los datos con lo que vamos a interactuar aqui
const Booking = require('../models/booking');

module.exports = {
    booking_get: (req, res, next) => {

        Booking.find().exec((error, booking) => {
            if(error) return next(error);
            return res.status(200).json({booking})
        })
        //res.send(`Obtenemos todos los booking desde controlles ${user}`);
    },

    booking_getOne: (req, res, next) => {

        let id = req.params.id;

        Booking.findById({_id: id}).exec((error, booking) => {
            if(error) return next(error);
            return res.status(200).json({booking})
        })
        //res.send(`Obtenemos el booking con el id ${req.params.id} desde controladores`)
    },

    booking_post: (req, res, next) => {
        const newData = req.body;
        const newBooking = new Booking(newData)

        //aqui la funcion .exec() me da error
        newBooking.save((error, booking) => {
            if(error) return next(error);
            return res.status(200).json({booking})
        })
    },

    booking_delete: (req, res, next) => {
        const idBooking = req.params.id;

        Booking.findByIdAndDelete(idBooking).exec(error => {
            if(error) return next(error);
            return res.status(200).json({success: `Booking ${idBooking} Eliminada`})
        })
        
    },

    booking_put: (req, res, next) => {
        const idBooking = req.params.id;
        const newDatos = req.body;
        Booking.findByIdAndUpdate(idBooking, newDatos, {returnOriginal: false})
            .exec((error, booking) => {
                if(error) return next(error)
                return res.status(200).json({booking})
            })

        //res.send(`Actualizamos el booking con el id ${idBooking} desde controladores ${newDatos}`)
    },
}