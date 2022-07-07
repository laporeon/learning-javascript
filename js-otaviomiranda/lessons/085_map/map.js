// Trabalhando com map

// Dobre os números
const numeros = [5, 5, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const dobreOsNumeros = numeros.map((numero) => numero * 2);
console.log(dobreOsNumeros);

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

// Retorna apenas uma string com o nome da pessoa
const nomes = pessoas.map((pessoa) => pessoa.nome);
console.log(nomes);

// Remova apenas a chave nome do objeto
const idades = pessoas.map((pessoa) => pessoa.idade);
console.log(idades);

// Adicione uma chave ID em cada objeto
const IDs = pessoas.map((pessoa, index) => {
   pessoa.id = index;
   return pessoa;
});
console.log(IDs);
