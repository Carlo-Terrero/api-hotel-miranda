const express = require('express');
const router = express.Router();

const contactController = require('../controllers/contactController');

router.get('/', contactController.constact_get);
router.get('/:id', contactController.constact_getOne);
router.delete('/:id', contactController.constact_delete);
router.put('/:id', contactController.constact_put);
router.post('/', contactController.constact_post);

module.exports = router;