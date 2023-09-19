'use strict'

const express = require('express');
const router = express.Router();

const roomController = require('../controllers/roomController');

router.get('/', roomController.room_get);

router.get('/offers', roomController.room_offerts);

router.get('/:id', roomController.room_getOne);

router.put('/:id', roomController.room_put);

router.delete('/:id', roomController.room_delete);

router.post('/', roomController.room_post);

module.exports = router;