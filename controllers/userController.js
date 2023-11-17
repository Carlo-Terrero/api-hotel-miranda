'use strict'

const User = require('../models/user')
const bcrypt = require("bcryptjs");

module.exports = {
    user_get: async (req, res, next) => {
       
        try{
            const result = await User.find();
            return res.status(200).json({result})
        }catch(error){
            next(error)
        }
    //res.send(`Obtenemos todos los users desde controlles ${JSON.stringify (user)}`);
    },
    
    user_getOne: async (req, res, next) => {
        const idUser = req.params.id;
        try{
            const result = await User.findById(idUser);
            return res.status(200).json({result})
        }catch(error){
            next(error)
        }
        //res.send(`Obtenemos el user con el id ${req.params.id} desde controladores`)
    },
    
    user_post: async (req, res, next) => {
        const upData = req.body;
        const {password} = req.body;

        const hasPassword = await bcrypt.hash(password, 7);

        upData.password = hasPassword;
        const newUser = new User(upData);

        try{
            const result = await newUser.save()
            return res.status(200).json({result})
        }catch(error){
            next(error)
        }
    },
    
    user_delete: async (req, res, next) => {
        const idUser = req.params.id;
        try{
            const result = await User.findByIdAndDelete(idUser);
            return res.status(200).json({success: `Usuario ${idUser} borrado`})
        }catch(error){
            next(error)
        }
        //res.json(`Eliminamos el user con el id ${req.params.id} desde controladores ${req.body}`)
        
    },
    
    user_put: async (req, res, next) => {
        
        const idUser = req.params.id;
        const upData = req.body;
        try{
            const result = await User.findByIdAndUpdate(idUser, upData, {returnOriginal: false})
            return res.status(200).json({result})
        }catch(error){
            next(error)
        }
    }
}


/* 
Brulio 1
root
$2a$07$vO.6Ekn/XvGFUC6cyi.eWux5Y63t5O.beoVqsimVaaDZdvoRRQD7q

Brulio fogon
roto
$2a$07$xkeKCeJ7hILpmRxzSdy7yuRuyDH52TqquNL48YAxS1neysSpECwNS

mago
roto

tamara
arreglado

*/