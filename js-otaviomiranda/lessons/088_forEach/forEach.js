const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];

a1.forEach(function (valor, indice, array) {
   console.log(valor, indice, array);
});

// simulando reduce com forEach
let total = 0;

a1.forEach((valor) => {
   total += valor;
});

console.log(total);
