var router =  require('express').Router();

var secret = require('../../config/secret');

var jwt = require('jsonwebtoken');
var auth = require('./auth-token');

// Verifica meu token de sessão
exports.sessionToken = (req, res, next) => {
    let auth = req.headers.authorization
    
    if ( !auth || !auth.startsWith('Bearer')) {
        return res.status(401).json({
            success: false,
            code: 'ACESS_RESTRICTED',
            message: 'Acesso restrito !',
        });
    } else {
        auth = auth.split('Bearer').pop().trim()
    }

    jwt.verify(auth, secret.JWT_KEY, (err, data) => {
        if (err) {
            res.json({
                success: false,
                code: 'AREA_RESTRITA',
                message: 'Você precisa logar novamente !',
                err: `${err}`
            });
        } else {    
            next();
        }
    });
};