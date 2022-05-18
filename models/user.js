'strict'

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    foto: String,
    description: String,
    contact: Number,
    password: String,
    estate: Boolean,
    start_date: Date,
    puesto: String
});

module.exports = mongoose.model('User', userSchema)