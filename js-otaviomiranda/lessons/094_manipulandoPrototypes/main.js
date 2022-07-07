//new Object -> Object.prototype
const objA = {
   chaveA: "A"
   // __proto__ : Object.prototype
};

const objB = {
   chaveB: "B"
};

Object.setPrototypeOf(objB, objA);
console.log(objB.chaveA);

// Exemplo

function Produto(nome, preco) {
   this.nome = nome;
   this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
   this.preco = this.preco - this.preco * (percentual / 100);
};

Produto.prototype.aumento = function (percentual) {
   this.preco = this.preco + this.preco * (percentual / 100);
};

const p1 = new Produto("Camiseta", 50);
//p1.desconto(100);
p1.aumento(100);
console.log(p1);
