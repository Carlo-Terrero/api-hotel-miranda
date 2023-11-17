'use strict'

const mongoose = require('mongoose');

const contact = new mongoose.Schema({
    name: {type: String, required: true},
    mail: {type: String, required: true},
    fhone: {type: Number, required: true},
    asunto: {type: String, required: true},
    mensaje: {type: String, required: true},
    state: {type: Boolean, required: true}
},{
    versionKey: false
});

module.exports = mongoose.model('Contact', contact);