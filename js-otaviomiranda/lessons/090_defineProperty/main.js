// defineProperty e defineProperties

function Produto(nome, preco, estoque) {
   this.nome = nome;
   this.preco = preco;
   // this.estoque = estoque;

   Object.defineProperty(this, "estoque", {
      enumerable: true, // decide se mostra mostra a chave
      value: estoque, // mostra o valor, pode ser uma função
      writable: false, // define se pode alterar ou não o valor
      configurable: true // define se a chave pode ou não ser apagada/reconfigurada
   });
}

const p1 = new Produto("Camiseta", 20, 3);
p1.estoque = 5090000;
console.log(p1);

console.log(Object.keys(p1)); //retorna um array com as chaves com enumerable true
// for (let chave in p1) {
//    console.log(chave);
// }
