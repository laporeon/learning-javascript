const express = require('express');
const route = express.Router();
const HomeController = require('./src/controllers/HomeController');
const ContatoController = require('./src/controllers/ContatoController');

// Criando as rotas usando route
route.get('/', HomeController.paginaInicial);
route.post('/', HomeController.trataPost);

route.get('/contato', ContatoController.paginaInicial);

// Exportando routes
module.exports = route;
