// Escreva uma função que recebe um  número e retorn o seguinte:
// Número é divisível por 3 = Fizz
// Número é divisível por 3 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número NÃO é divisível nem por 3 ne por 3 = retorne o próprio número
// Checar se realmente é um número. Use a função com número de 0 a 100

function fizzBuzz(numero) {
   if (typeof numero !== "number") {
      return numero;
   } else if (numero % 3 === 0 && numero % 5 === 0) {
      return "FizzBuzz";
   } else if (numero % 3 === 0) {
      return "Fizz";
   } else if (numero % 5 === 0) {
      return "Buzz";
   } else {
      return numero;
   }
}

for (let i = 0; i <= 100; i++) {
   console.log(i, fizzBuzz(i));
}
