'use Strict'

const Message = require('../models/message');

module.exports = {
    get_messages: function(req, res, next){
        
        Message.find().exec((error, messages) => {
            if(error) return next(error);
            return res.status(200).json({messages})
        })

    },

    get_one_message: function(req, res, next){
        const idMessage = req.params.id;

        Message.findById({_id: idMessage}, (error, message) =>{
            if(error) return next(error);
            return res.status(200).json({message});
        })

    },

    post_message: function(req, res, next){
        const newData = req.body;
        const newMessage = new Message(newData);

        newMessage.save((error, message) =>{
            if(error) return next(error);
            return res.status(200).json({message});
        })
    },

    put_message: function(req, res, next){
        const idMessage = req.params.id;
        const newDataMessage = req.body;
        //const newMessage = new Message(newDataMessage);


        Message.findByIdAndUpdate(idMessage, newDataMessage, {returnOriginal: false}, (error, message) => {
            if(error) return next(error);
            return res.status(200).json({message});
        })
    },

    delete_message: function(req, res, next){
        const idMessage = req.params.id;

        Message.findByIdAndDelete(idMessage, (error) => {
            if(error) return next(error);
            return res.status(200).json({success: `Message ${idMessage} eliminado`, id: `${idMessage}`});
        })
    },

};