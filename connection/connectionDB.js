'use strict'

const mongoose = require('mongoose');
require('dotenv').config()

main().catch(err => console.log(err));

async function main() {
    try{
        await mongoose.connect(process.env.URL_MONGO_DBS)
        console.log('conexion success')
    
    }catch(err){
        console.log('Error en: ', err)
    }
   
}