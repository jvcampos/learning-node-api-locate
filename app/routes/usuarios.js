var router = require('express').Router();

var usuarios = require('../controllers/usuarios-controller');

router.post('/cadastrar', usuarios.formCadastro);

module.exports = router;