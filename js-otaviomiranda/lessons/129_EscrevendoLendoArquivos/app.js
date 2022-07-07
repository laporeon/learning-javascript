const path = require('path');
const caminhoArquivo = path.resolve(__dirname, '.', 'teste.json');
const write = require('./modules/escrever');
const read = require('./modules/ler');

// const pessoas = [
//   { nome: 'Daniel' },
//   { nome: 'José' },
//   { nome: 'Pedro' },
//   { nome: 'Carlos' },
// ];

// const json = JSON.stringify(pessoas, '', 2);
// write(caminhoArquivo, json);

async function lerArquivo(caminho) {
  const dados = await read(caminho);
  renderizaDados(dados);
}

function renderizaDados(dados) {
  dados = JSON.parse(dados);
  dados.forEach((dado) => console.log(dado));
}

lerArquivo(caminhoArquivo);
