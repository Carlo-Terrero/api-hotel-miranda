'strict'

const mongoose = require('mongoose');

const rooms = new mongoose.Schema({
    foto: String,
    bed_type: String,
    number: Number,
    description: String,
    offer: Boolean,
    price: Number,
    discount: Number,
    cancellation: String,
    facilities: String
},{
    versionKey: false
})

module.exports = mongoose.model('Room', rooms);