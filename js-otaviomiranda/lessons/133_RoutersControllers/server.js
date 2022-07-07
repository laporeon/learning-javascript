const express = require('express');
const app = express();
// Importanto routes
const routes = require('./routes');

app.use(express.urlencoded({ extended: true }));
// falando para o express usar as rotas com o route
app.use(routes);

app.listen(8000, () => {
  console.log('Servidor rodando...');
});
