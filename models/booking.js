'strict'

const mongoose = require('mongoose');

const booking = new mongoose.Schema({
    name: {type: String, required: true },
    order_date: {type: Date, required: true},
    check_In: {type: Date, required: true},
    check_Out: {type: Date, required: true},
    special_request: {type: String, required: true },// --->
    room_number: {type: String, required: true },
    price: {type: Number, required: true},
    amenities: {type: String, required: true },
    fotos: {type: String, required: true },
    room_type: {type: String, required: true },
    status: {type: String, required: true },
    description_room: {type: String, required: true }
    //{type: 'string', required: true, index: true}
},{
    versionKey: false
})

module.exports = mongoose.model('Booking', booking);