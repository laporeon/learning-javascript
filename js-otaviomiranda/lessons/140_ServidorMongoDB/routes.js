const express = require('express');
const route = express.Router();
const HomeController = require('./src/controllers/HomeController');
const ContatoController = require('./src/controllers/ContatoController');

//middlewares
function meuMiddleware(req, res, next) {
  console.log();
  console.log('Passei no seu middleware.');
  console.log();
  next();
}

// Criando as rotas usando route
route.get('/', meuMiddleware, HomeController.paginaInicial);
route.post('/', HomeController.trataPost);

route.get('/contato', ContatoController.paginaInicial);

// Exportando routes
module.exports = route;
