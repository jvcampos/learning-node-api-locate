const db = require('../config/db'); // Recupero minha conexão
const Sequelize = require('sequelize'); // Recupero o ORM

const Produto = db.define('produto', { // Irei criar uma tabela no banco de dados definido..
    nome: {
        type: Sequelize.STRING, // Tipo
        allowNull:false, // Não pode ser nulo
        validate: { // Validações
            notEmpty: true, // Não pode ser vazio
        }
    },

    categoria: {
        type: Sequelize.STRING,
        allowNull:false,
        validate: {
            notEmpty: true,
        }
    },

    preco: {
        type: Sequelize.STRING,
        allowNull:false,
        validate: {
            notEmpty: true,
        }
    },
});

// db.sync()
//     .then(() => console.log('DB: Tabela (Produtos) funcionando !'))
//     .catch(err => console.error('DB: Erro ao criar a tabela'));

module.exports = { Produto } // Exporto esse modelo para as rotas