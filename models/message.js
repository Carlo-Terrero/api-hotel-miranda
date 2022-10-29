'use strict'

const mongoose = require('mongoose');

const messages = new mongoose.Schema({
    name: {type: String, required: true},
    mail_message: {type: String, required: true},
    messageClient: {type: String, required: true},
    date: {type: Date, required: true},
    read: {type: Boolean, required: true}
},{
    versionKey: false,
})

module.exports = mongoose.model('Message', messages);