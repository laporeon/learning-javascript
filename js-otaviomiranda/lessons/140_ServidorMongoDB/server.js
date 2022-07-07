// importando dotenv
require('dotenv').config();

const express = require('express');
const app = express();

// importando  mongoose
const mongoose = require('mongoose');

// criando conexão
mongoose
  .connect(process.env.CONNECTIONSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Conectei a base de dados.');
    app.emit('pronto');
  })
  .catch((e) => console.log(e));

const path = require('path');
// Importanto routes
const routes = require('./routes');

app.use(express.urlencoded({ extended: true }));

// usar arquivos estáticos
app.use(express.static(path.resolve(__dirname, 'public')));

// falando para o express usar as rotas com o route
app.use(routes);

// setando a view engine
app.set('views', path.resolve(__dirname, 'src/views'));
app.set('view engine', 'ejs');

// a conexão só vai ocorrer quando o app emitir o sinal de pronto de conexão
app.on('pronto', () => {
  app.listen(8000, () => {
    console.log('Acessar http://localhost:8000');
    console.log('Servidor rodando...');
  });
});
