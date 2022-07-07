// Unindo filter, map e reduce

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)

const numerosPares = numeros
   .filter((numero) => numero % 2 === 0) // [50, 80, 2, 8, 22]
   .map((numero) => numero * 2) //[100, 160, 4, 16, 44]
   .reduce((acc, cur) => acc + cur); // 100 + 160 + 4 + 16 + 44

console.log(numerosPares);
