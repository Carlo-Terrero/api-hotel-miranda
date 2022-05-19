'strict'

const mongoose = require('mongoose');

const booking = new mongoose.Schema({
    name: String,
    order_date: Date,
    check_In: Date,
    check_Out: Date,
    special_request: String,// --->
    room_number: String,
    price: Number,
    amenities: String,
    fotos: String,
    room_type: String,
    status: String,
    description_room: String
    //{type: 'string', required: true, index: true}
},{
    versionKey: false
})

module.exports = mongoose.model('Booking', booking);