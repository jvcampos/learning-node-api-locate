const Sequelize = require('sequelize');

const db = new Sequelize('mysql://root:1997@localhost:3306/dbMercado'); // minha conexão em string

module.exports = db; // Exporto minha conexão