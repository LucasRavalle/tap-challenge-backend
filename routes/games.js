var express = require('express');
var router = express.Router();
const {create, show, update} = require('../controllers/gameController');

router.get('/', create);
router.get('/:id', show);
router.post('/', update);

module.exports = router;
