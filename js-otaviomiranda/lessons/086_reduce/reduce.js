// Trabalhando com reduce

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Some todos os números

const somaTotal = numeros.reduce((acc, cur) => {
   console.log(acc);
   return acc + cur;
}, 0);

console.log(somaTotal);

// Retorne um array com os pares (imitando filter)
const pares = numeros.reduce((acc, cur) => {
   if (cur % 2 === 0) acc.push(cur);
   return acc;
}, []);

console.log(pares);

// Retorno um array com o dobro dos valores (imitando map)
const dobro = numeros.reduce((acc, cur) => {
   acc.push(cur * 2);
   return acc;
}, []);
console.log(dobro);

// Array para as últimas questões
const pessoas = [
   { nome: "Luiz", idade: 62 },
   { nome: "Maria", idade: 23 },
   { nome: "Eduardo", idade: 55 },
   { nome: "Letícia", idade: 19 },
   { nome: "Rosana", idade: 32 },
   { nome: "Wallace", idade: 47 },
   { nome: "Joana", idade: 97 },
];

// Retorne a pessoa mais velha
const maisVelha = pessoas.reduce((acc, cur) => {
   if (acc.idade > cur.idade) return acc;
   return cur;
});

console.log(maisVelha);
