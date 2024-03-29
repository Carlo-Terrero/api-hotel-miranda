'use strict'

const mongoose = require('mongoose');

const users = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    foto: {type: String, required: true},
    description: {type: String, required: true},
    contact: {type: Number, required: true},
    password: {type: String, required: true},
    state: {type: Boolean, required: true},
    start_date: {type: Date, required: true},
    puesto: {type: String, required: true},
    schedule: {type: String, require: true}
}, {
    versionKey: false
});

module.exports = mongoose.model('User', users)