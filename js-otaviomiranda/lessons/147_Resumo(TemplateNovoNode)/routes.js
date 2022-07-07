const express = require('express');
const route = express.Router();
const HomeController = require('./src/controllers/HomeController');
const ContatoController = require('./src/controllers/ContatoController');

route.get('/', HomeController.paginaInicial);
route.post('/', HomeController.trataPost);

route.get('/contato', ContatoController.paginaInicial);

module.exports = route;
