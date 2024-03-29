/*
Crie um array com 5 items (tipos variados).
*/
var array = [1, "teste", { nome: "JavaScript" }, true, ["arroz", "feijão"]];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(args) {
  array.push(args);
  return array;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
var novoArray = [{ teste: "Ninja" }, "Teste", 1];
console.log(addItem(novoArray));

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log("O segundo elemento do segundo array é " + novoArray[1] + ".");

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log("O primeiro array tem " + array.length + " itens.");

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log("O segundo array tem " + novoArray.length + " itens.");

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log("Números pares entre 10 e 20:");
var indice = 10;
while (indice <= 20) {
  console.log(indice);
  indice += 2;
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log("Números ímpares entre 10 e 20:");
var indice = 10;
while (indice <= 20) {
  if (indice % 2 !== 0) console.log(indice);
  indice++;
}
/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log("Números pares entre 100 e 120:");
for (let indice = 100; indice <= 120; indice += 2) {
  console.log(indice);
}

console.log("Números ímpares entre 111 e 125:");
for (let indice = 111; indice <= 125; indice++) {
  if (indice % 2 !== 0) console.log(indice);
}
