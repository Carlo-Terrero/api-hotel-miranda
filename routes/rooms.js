const express = require('express');
const router = express.Router();

// Importamos los controladores
const roomController = require('../controllers/roomController')

// Cogemos todas las rooms
router.get('/', roomController.room_get)

// Seleccionamos la room de la id
router.get('/:id', roomController.room_getOne)

// Actualizamos la room de la id
router.put('/:id', roomController.room_put)

// Eliminamos la room del id
router.delete('/:id', roomController.room_delete)

// Añadimos una room
router.post('/', roomController.room_post)

module.exports = router;