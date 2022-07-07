/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
const array = [
  "Toy Story 4",
  "Star Wars: The Last Jedi",
  "Don't Look Up",
  "Halloween",
  "Panic",
];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function retornaArray(array) {
  return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(retornaArray(array)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function retornarValor(array, indice) {
  return array[indice];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
const segundoArray = [5, "Teste", ["arroz", "feijão"], true, { id: 5 }];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(retornarValor(segundoArray, 0));
console.log(retornarValor(segundoArray, 1));
console.log(retornarValor(segundoArray, 2));
console.log(retornarValor(segundoArray, 3));
console.log(retornarValor(segundoArray, 4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nome) {
  const livros = {
    "Aprendendo JavaScript": {
      quantidadePaginas: 590,
      autor: "Fulano da Silva",
      editora: "Editando",
    },
    "Aprendendo Java": {
      quantidadePaginas: 890,
      autor: "Beltrano da Silva",
      editora: "Editando",
    },
    "Aprendendo Python": {
      quantidadePaginas: 490,
      autor: "Cicrano da Silva",
      editora: "Editando",
    },
  };

  return livros[nome] ? livros[nome] : livros;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log(
  `O livro Aprendendo JavaScript tem ${
    book("Aprendendo JavaScript").quantidadePaginas
  } páginas!`
);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(
  `O autor do livro Aprendendo Java é ${book("Aprendendo Java").autor}.`
);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(
  `O livro Aprendendo Python foi publicado pela editora ${
    book("Aprendendo Python").editora
  }.`
);
