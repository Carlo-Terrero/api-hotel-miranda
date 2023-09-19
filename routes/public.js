'use strict'

const express = require('express');
const router = express.Router();

const roomController = require('../controllers/roomController');
const contactMessage = require('../controllers/messageController');

router.get('/rooms', roomController.room_get);
router.get('/offert', roomController.room_offerts);
router.get('/room/:id', roomController.room_getOne);

router.post('/message', contactMessage.post_message);


module.exports = router;