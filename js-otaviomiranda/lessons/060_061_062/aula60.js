//Escreva uma função que receba dois números e retorne o maior deles

// MODO 1
function maior(n1, n2) {
   return Math.max(n1, n2);
}

// MODO 2
function maiorNumero(x, y) {
   if (x > y) {
      return x;
   } else {
      return y;
   }
}

// MODO 3
function maiorNum(a, b) {
   return a > b ? a : b;
}

// MODO 4
const max = (z, w) => (z > w ? z : w);

console.log(maior(90, 1000));
console.log(maiorNumero(90000, 1000));
console.log(maiorNum(-4, -999));
console.log(max(-89890, 90));
