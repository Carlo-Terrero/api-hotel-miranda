'strict'

const mongoose = require('mongoose');

const pruebas = new mongoose.Schema({
    name: String,
    edad: Number
});

module.exports = mongoose.model('pruebas', pruebas);