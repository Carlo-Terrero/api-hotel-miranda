'strict'

const mongoose = require('mongoose');

const pruebas = new mongoose.Schema({
    name: String,
    edad: Number
},{
    versionKey: false
});

module.exports = mongoose.model('Pruebas', pruebas);