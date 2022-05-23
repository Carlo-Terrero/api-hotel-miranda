const Contact = require('../models/contact');

module.exports = {
    constact_get: function(req, res, next){

        Contact.find((error, contact) =>{
            if(error) return next(error);
            return res.status(200).json({contact})
        })
        
    },
    
    constact_getOne: function(req, res, next){
        const idcontact = req.params.id;

        Contact.findById({_id: idcontact}, (error, contact) => {
            if(error) return next(error);
            return res.status(200).json({contact})
        })
        
    },
    
    constact_post: function(req, res, next){
        const newData = req.body;
        const newContact = new Contact(newData);

        newContact.save((error, contact) => {
            if(error) return next(error);
            return res.status(200).json({contact});
        })
    },
    
    constact_delete: function(req, res, next){
        const idcontact = req.params.id;

        Contact.findByIdAndDelete(idcontact, (error) => {
            if(error) return next(error);
            return res.status(200).json({success: `Habitacion ${idcontact} eliminada`})
        })
        //res.send(`Eliminamos la room con el id ${req.params.id} desde controladores`)
    },
    
    constact_put: function(req, res, next){
        const idcontact = req.params.id;
        const NewData = req.body;

        Contact.findByIdAndUpdate(idcontact, NewData,  {returnOriginal: false}, (error, contact) => {
            if(error) return next(error);
            return res.status(200).json({contact})
        })
        //res.send(`Actualizamos la room con el id ${req.params.id} desde controladores`)
    }

}