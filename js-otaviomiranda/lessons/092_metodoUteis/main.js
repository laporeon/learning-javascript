// métodos úteis para objetos

const produto = {
   nome: "Produto",
   preco: 1.8
};

console.log(Object.getOwnPropertyDescriptor(produto, "nome")); // pega a descrição da propriedade passada como argumento

console.log(Object.values(produto)); // retorna um array com os valores
console.log(Object.entries(produto)); // retorna um array com as chaves e um com os valores

// const caneca = { ...produto, material: "porcelana" }; // copiando o objeto, maneira mais simples

const caneca = Object.assign({}, produto, { material: "porcelana" }); // copiando objeto utilizando assign

caneca.nome = "Outro nome";
caneca.preco = 2.5;
console.log(produto);
console.log(caneca);
