const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Testando o express + o nodemon!');
});

app.listen(8000, () => {
  console.log('Servidor rodando...');
});
