const db = require('../config/db');
const Sequelize = require('sequelize');

const Usuario = db.define('usuario', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },

    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },

    password: {
        type: Sequelize.STRING,
        allowNull: false ,
        validate: {
            notEmpty: true,
        }
    }
});

// db.sync()
//     .then(() => console.log('DB: Tabela (Usuários) funcionando !'))
//     .catch(err => console.log('DB: Erro ao criar a tabela'));

module.exports = { Usuario }