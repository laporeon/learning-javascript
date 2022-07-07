// Produto -> aumento, desconto
// Camiseta = Cor, caneca = material

function Produto(nome, preco) {
   this.nome = nome;
   this.preco = preco;
}

Produto.prototype.aumento = function (value) {
   this.preco += value;
};

Produto.prototype.desconto = function (value) {
   this.preco -= value;
};

function Camiseta(nome, preco, cor) {
   Produto.call(this, nome, preco);
   this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function (percentual) {
   this.preco = this.preco + this.preco * (percentual / 100);
};

const produto = new Produto("Gen", 111);
const camiseta = new Camiseta("Regata", 7.5, "preta");
console.log(produto);
console.log(camiseta);
