'use strict'

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    try{
        await mongoose.connect('mongodb://localhost:27017/apiMiranda')
        console.log('conexion success')
    
    }catch(err){
        console.log('Error en: ', err)
    }
   
}