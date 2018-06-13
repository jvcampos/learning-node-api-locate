'use strict'

var express = require('express'); // Rotas
var bodyParser = require('body-parser'); // BodyParser
var path = require('path');
var PORT = process.env.PORT || 3000;

var db = require('./config/db');


var app = express(); // Usamos as rotas em APP

// Configurando BodyParser
app.use(bodyParser.json()); // Dizendo que irei enviar os dados via json
app.use(bodyParser.urlencoded({extended: true})); // Os dados serão recuperados com method POST

app.set('views', path.join(__dirname, './app/views'));
app.set('view engine','ejs');

// Configurando arquivos Estáticos
app.use(express.static('app/public'));

// // Rotas da Aplicação
var localizacao = require('./app/routes/find-localizacao');
var usuarios = require('./app/routes/usuarios')
var produtos = require('./app/routes/produtos');
var auth = require('./app/routes/auth');

// Minhas URL
app.use('/localizacao', localizacao);
app.use('/usuarios', usuarios);
app.use('/produtos', produtos);
app.use('/auth', auth);

// Rota de teste
app.get('/', (req, res, next) => {
    res.status(200).send({'Rota Teste: ': 'ON !!!'});
})

// Iniciando aplicação
app.listen(PORT, () => {
    console.log(`Servidor ON: ${PORT} !`);
});

