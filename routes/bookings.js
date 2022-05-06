const express = require('express');
const router = express.Router();

// Cogemos todas la bookings
router.get('/', (req, res, next) => {
    res.send('Obtenemos todos los booking');
})

// Cogemos una booking
router.get('/:id', (req, res, next) =>{
    res.send('Obtenemos el elemento del id')
})

// Añadimos un booking
router.post('/', (req, res, next) => {
    res.send('agregamos todos lo booking');
})

// Borramos booking
router.delete('/:id', (req, res, next) => {
    res.send('Borramos todos lo booking');
})

// Actualizamos booking
router.put('/:id', (req, res, next) => {
    res.send('actualizamos todos lo booking');
})

module.exports = router;