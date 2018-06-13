var Sequelize = require('sequelize');

var secret = require('../../config/secret');

var jwt = require('jsonwebtoken');
var auth = require('./auth-check');

exports.loginUser = (req, res, next) => {
    const { email, password } = req.body;

    if ( email === undefined || password === undefined){
        res.status(401).send({
            success: false,
            code: 'LOGIN_ERROR',
            message: 'Email ou senha incorretos'
       });
    } else {
        let tokenData = {
            id: 101
        }
        let generatedToken = jwt.sign(tokenData, secret.JWT_KEY, { expiresIn: '1m'});
        res.json({
            success: true,
            message: 'Token Gerado !',
            token: generatedToken
        });
    };
};

// exports.session = (req, res, next) => {
//     auth.sessionToken(req, res, next);
//     res.json({
//         sucess: true,
//         message :'Logado com sucesso !!'
//     });
// };





