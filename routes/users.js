var express = require('express');
var router = express.Router();

//importamos controladores
var userController = require('../controllers/userController')

//La parte que esta comentada es sin controladores, el resto si

/* GET users listing. */
router.get('/', userController.user_get);

// Cogemos un user
router.get('/:id', userController.user_getOne);


// Añadimos un user
router.post('/', userController.user_post);

// Actualizamos  un user
router.put('/:id', userController.user_put);

// Eliminamos un user
router.delete('/:id', userController.user_delete);

module.exports = router;