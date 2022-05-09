const express = require('express');
const router = express.Router();

//Importamos los controladores
const bookingControllers = require('../controllers/bookingController');

// Cogemos todas la bookings
router.get('/', bookingControllers.booking_get)

// Cogemos una booking
router.get('/:id', bookingControllers.booking_getOne)

// Añadimos un booking
router.post('/', bookingControllers.booking_post)

// Borramos booking
// este me da fallo 401 en el test pero no lo contabiliza
router.delete('/:id', bookingControllers.booking_delete)

// Actualizamos booking
router.put('/:id', bookingControllers.booking_put)

module.exports = router;