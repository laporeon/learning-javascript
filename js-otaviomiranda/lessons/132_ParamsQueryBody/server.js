const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

// http://facebook.com/profiles/12345?campanha=googleads

app.get('/', (req, res) => {
  res.send(`
  <form action="/" method="POST">
  Nome do cliente: <input type="text" name="nome">
  Idade do cliente: <input type="number "name="idade">
  <button>Olá mundo</button>
  </form>`);
});

app.get('/testes/:idUsuarios', (req, res) => {
  console.log(req.params);
  res.send(req.params.idUsuarios);
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send(
    `O que você me enviou foi { Nome: ${req.body.nome} } e { Idade: ${req.body.idade} }`
  );
});

app.listen(8000, () => {
  console.log('Servidor rodando...');
});
