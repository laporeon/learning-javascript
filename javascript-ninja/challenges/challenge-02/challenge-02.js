// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function sum(arg1, arg2) {
  return arg1 + arg2;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var result = sum(1, 2) + 5;

// Qual o valor atualizado dessa variável?
console.log(result); // Resultado: 8

// Declare uma nova variável, sem valor.
var newVariable;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function addValue() {
  newVariable = 10;
  return "O valor agora variável agora é " + newVariable + ".";
}

// Invoque a função criada acima.
console.log(addValue());

// Qual o retorno da função? (Use comentários de bloco).
// Resultado: 'O valor agora variável agora é 10.'

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function teste(arg1, arg2, arg3) {
  if (!arg1 || !arg2 || !arg3) {
    return "Preencha todos os valores corretamente!";
  }

  return arg1 * arg2 * arg3 + 2;
}

// Invoque a função criada acima, passando só dois números como argumento.
console.log(teste(1, 2));

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 'Preencha todos os valores corretamente!'

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
console.log(teste(1, 2, 3));

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// Resultado: 8

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento. 
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos. 
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`. 
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function multipleArgs(arg1, arg2, arg3) {
  if (!arg1 && !arg2 && !arg3) {
    return false;
  } else if (!arg2 && !arg3) {
    return arg1;
  } else if (!arg3) {
    return arg1 + arg2;
  } else {
    return (arg1 + arg2) / arg3;
  }
  return null;
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
console.log(multipleArgs(2, 4, 2)); // 3
console.log(multipleArgs(20, 2)); // 22
console.log(multipleArgs(100)); // 100
console.log(multipleArgs()); // false
console.log(multipleArgs(1, 2, 3, 4)); // false
