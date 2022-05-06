const express = require('express');
const router = express.Router();

// Cogemos todas las rooms
router.get('/', (req, res, next) => {
    res.send('Todas las rooms');
})

// Seleccionamos la room de la id
router.get('/:id', (req, res, next) =>{
    res.send()
})

// Actualizamos la room de la id
router.put('/:id', (req, res, next) => {
    res.send('Actualizamos una room');
})

// Eliminamos la room del id
router.delete('/:id', (req, res, next) => {
    res.send('Eliminamos una room');
})

// Añadimos una room
router.post('/', (req, res, next) => {
    res.send('agregues rooms');
})

module.exports = router;