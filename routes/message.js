'use strict'

const express = require('express');
const router = express.Router();

const messageController = require('../controllers/messageController');

router.get('/', messageController.get_messages);

router.get('/:id', messageController.get_one_message);

router.post('/', messageController.post_message);

router.put('/:id', messageController.put_message);

router.delete('/:id', messageController.delete_message);

module.exports = router;