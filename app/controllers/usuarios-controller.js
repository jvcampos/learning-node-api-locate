var Sequelize = require('sequelize');

var Usuarios = require('../../models/usuarios').Usuario;

exports.formCadastro = async (req, res, next) => {
    await res.render('usuarios/add_usuario');
};