// Função construtora -> objetos
//  Função fábrica -> objetos
// Construtora -> Pessoa (new)
function Pessoa(nome, sobrenome) {
   //Atributos ou métodos privados
   const ID = 123456;
   const metodoInterno = function () {};

   //Atributos ou métodos públicos pois podem ser acessados com a notação de ponto
   this.nome = nome;
   this.sobrenome = sobrenome;

   this.metodo = () => {
      console.log(this.nome + ": Sou um método");
   };
}

const p1 = new Pessoa("Luiz", "Otávio");
const p2 = new Pessoa("Maria", "Oliveira");

p1.metodo();
