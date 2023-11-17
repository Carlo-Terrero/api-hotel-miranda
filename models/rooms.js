'use strict'

const mongoose = require('mongoose');

const rooms = new mongoose.Schema({
    foto: {type: String, required: true},
    bed_type: {type: String, required: true},
    number: {type: Number, required: true},
    description: {type: String, required: true},
    offer: {type: Boolean, required: true},
    price: {type: Number, required: true},
    discount: {type: Number, required: true},
    cancellation: {type: String, required: true},
    facilities: {type: String, required: true},
    state: {type: Boolean, required: true},
    room_floor: {type: Number, required: true}
},{
    versionKey: false
})

module.exports = mongoose.model('Room', rooms);