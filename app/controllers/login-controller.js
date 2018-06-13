var Sequelize = require('sequelize');

var Op = Sequelize.Op;

var Produto = require('../../models/produto').Produto;
var session = require('../middleware/auth-check');

exports.home = (req, res, next) => {
        res.json({
            sucess: true,
            message :'Logado com sucesso !!'
    });
};
