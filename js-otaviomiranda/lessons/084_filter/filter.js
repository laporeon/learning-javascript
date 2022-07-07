// Trabalhando com filter

// Retorne os números maiores que 10
const numeros = [5, 5, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const maioresQueDez = numeros.filter((numero) => numero > 10);
console.log(maioresQueDez);

// Array para as últimas perguntas

const pessoas = [
   { nome: "Luiz", idade: 62 },
   { nome: "Maria", idade: 23 },
   { nome: "Eduardo", idade: 55 },
   { nome: "Letícia", idade: 19 },
   { nome: "Rosana", idade: 32 },
   { nome: "Wallace", idade: 47 },
   { nome: "Joana", idade: 97 },
];

// Retorna as pessoas que tem o nome com 5 letras ou mais
const nomeCincoLetras = pessoas.filter((pessoa) => pessoa.nome.length >= 5);
// pessoa.nome.length >= 5);
console.log(nomeCincoLetras);

// Retorna as pessoas com mais de 50 anos
const maisDe50 = pessoas.filter((pessoa) => pessoa.idade > 50);
console.log(maisDe50);

// Retorne as pessoas cujo nome termina com a
const terminaComA = pessoas.filter(
   (pessoa) => pessoa.nome.toLowerCase().charAt(pessoa.nome.length - 1) === "a"
   // ou (pessoa) => pessoa.nome.toLowerCase().endsWith('a')
);
console.log(terminaComA);
