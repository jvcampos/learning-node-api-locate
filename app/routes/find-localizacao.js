var router = require('express').Router();
var request = require('request');

var find = require('../controllers/localizacao-controller');

router.get('/find', find.formFind);
router.post('/procurarlocalizacao', find.local);

module.exports = router;
