// criando classes
class Pessoa {
   constructor(nome, sobrenome) {
      this.nome = nome;
      this.sobrenome = sobrenome;
   }
   falar() {
      console.log(`${this.nome} está falando.`);
   }
   comer() {
      console.log(`${this.nome} está comendo.`);
   }
   beber() {
      console.log(`${this.nome} está bebendo.`);
   }
}

// diferença entre classes e função construtora
function Pessoa2(nome, sobrenome) {
   this.nome = nome;
   this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function () {
   console.log(`${this.nome} está falando.`);
};

const p1 = new Pessoa('Luiz', 'Miranda');
console.log(p1);
console.log(p1.beber());
