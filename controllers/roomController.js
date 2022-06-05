// var Author = require('../models/author'); Este seria el modelo de la tabla de la bbdd
//var user = require('../data/user')//Los datos con lo que vamos a interactuar aqui
const Room = require('../models/rooms');

module.exports = {
    room_get: function(req, res, next){

        Room.find((error, rooms) =>{
            if(error) return next(error);
            return res.status(200).json({rooms})
        })
        
    },
    
    room_getOne: function(req, res, next){
        const idroom = req.params.id;

        Room.findById({_id: idroom}, (error, room) => {
            if(error) return next(error);
            return res.status(200).json({room})
        })
        
    },
    
    room_post: function(req, res, next){
        const newData = req.body;
        const newRoom = new Room(newData);

        newRoom.save((error, room) => {
            if(error) return next(error);
            return res.status(200).json({room});
        })
    },
    
    room_delete: function(req, res, next){
        const idRoom = req.params.id;

        Room.findByIdAndDelete(idRoom, (error) => {
            if(error) return next(error);
            return res.status(200).json({success: `Habitacion ${idRoom} eliminada`, id: `${idRoom}`})
        })
        //res.send(`Eliminamos la room con el id ${req.params.id} desde controladores`)
    },
    
    room_put: function(req, res, next){
        const idroom = req.params.id;
        const NewData = req.body;

        Room.findByIdAndUpdate(idroom, NewData,  {returnOriginal: false}, (error, room) => {
            if(error) return next(error);
            return res.status(200).json({room})
        })
        //res.send(`Actualizamos la room con el id ${req.params.id} desde controladores`)
    }
}