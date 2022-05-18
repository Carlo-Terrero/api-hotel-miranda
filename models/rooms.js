'strict'

const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    foto: String,
    bed_type: String,
    number: Number,
    description: String,
    offer: Boolean,
    price: Number,
    discount: Number,
    cancellation: String,
    facilities: String

})

module.exports = mongoose.model('Room', roomSchema);