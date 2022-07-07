const express = require('express');
const app = express();
const path = require('path');
// Importanto routes
const routes = require('./routes');

app.use(express.urlencoded({ extended: true }));

// falando para o express usar as rotas com o route
app.use(routes);

// setando a view engine
app.set('views', path.resolve(__dirname, 'src/views'));
app.set('view engine', 'ejs');

app.listen(8000, () => {
  console.log('Servidor rodando...');
});
