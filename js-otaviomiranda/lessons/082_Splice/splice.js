const nomes = ["Maria", "João", "Eduardo", "Gabriel", "Júlia"];

// nomes.splice(indice, delete, elem1, elem2, elem3...)

// simulando o método pop
const removidos = nomes.splice(3, 2);

console.log(nomes);
console.log(removidos);

// simulando o método push
nomes.splice(nomes.length, 0, "Daniel");

// simulando o método shift
const removidos = nomes.splice(0, 1);
console.log(nomes);
console.log(removidos);

// simulando o método unshift
nomes.splice(0, 0, "Daniel");
console.log(nomes);
