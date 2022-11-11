'use strict'

const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController')

router.get('/', userController.user_get);

router.get('/:id', userController.user_getOne);

router.post('/', userController.user_post);

router.put('/:id', userController.user_put);

router.delete('/:id', userController.user_delete);

module.exports = router;