'use strict'

const Room = require('../models/rooms');

//probamos prueba deploid 11
module.exports = {
    room_get: function(req, res, next){
        Room.find((error, rooms) =>{
            if(error) return next(error);

            return res.status(200).json({rooms});
        });
        
    },
    
    room_getOne: function(req, res, next){
        const idRoom = req.params.id;

        Room.findById({_id: idRoom}, (error, room) => {
            if(error) return next(error);
            return res.status(200).json({room});
        });
        
    },

    room_offerts: function(req, res, next){

        const offer = {offer: true};
        Room.find(offer, (error, rooms) => {
            if(error) return next(error);
            return res.status(200).json({rooms});
        });
    },
    
    room_post: function(req, res, next){
        const newData = req.body;
        const newRoom = new Room(newData);

        newRoom.save((error, room) => {
            if(error) return next(error);
            return res.status(200).json({room});
        });
    },
    
    room_delete: function(req, res, next){
        const idRoom = req.params.id;

        Room.findByIdAndDelete(idRoom, (error) => {
            if(error) return next(error);
            return res.status(200).json({success: `Habitacion ${idRoom} eliminada`, id: `${idRoom}`});
        });
    },
    
    room_put: function(req, res, next){
        const idRoom = req.params.id;
        const NewData = req.body;

        Room.findByIdAndUpdate(idRoom, NewData,  {returnOriginal: false}, (error, room) => {
            if(error) return next(error);
            return res.status(200).json({room});
        });
    }
}