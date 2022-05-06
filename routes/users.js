var express = require('express');
var router = express.Router();
//importamos controladores
var userControlle = require('../controllers/userController')

//De esta manera he hecho dos formas de hacerlo. Con controller y sin ellos

/* GET users listing. */
/* router.get('/', function(req, res, next) {
  res.send('Todos los usuarios');
}); */
router.get('/', userControlle.user_get);

// Cogemos un user
/* router.get('/:id', (req, res, next) =>{
  res.send('Got a GET request whit id')
}) */
router.get('/:id', userControlle.user_getOne);


// Añadimos un user
router.post('/', (req, res, next) => {
  res.send('Got a POST request')
});

// Actualizamos  un user
router.put('/:id', (req, res, next) => {
  res.send('Got a put request')
});

// Eliminamos un user
router.delete('/:id', (req, res, next) => {
  res.send('Got a delete request')
});

module.exports = router;