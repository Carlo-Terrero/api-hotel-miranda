'strict'

const mongoose = require('mongoose');

const users = new mongoose.Schema({
    name: String,
    email: String,
    foto: String,
    description: String,
    contact: Number,
    password: String,
    estate: Boolean,
    start_date: Date,
    puesto: String
}, {
    versionKey: false
});

module.exports = mongoose.model('User', users)