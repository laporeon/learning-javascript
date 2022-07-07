// Factory functions (função que cria alguma coisa, recebendo parâmetros)
function criaPessoa(nome, sobrenome) {
   return {
      nome,
      sobrenome,
      get nomeCompleto() {
         return `${this.nome} ${this.sobrenome}`;
      },
   };
}

const p1 = criaPessoa("Luiz", "Otavio");
console.log(p1.nomeCompleto);

// Constructor functions
function Pessoa(nome, sobrenome) {
   this.nome = nome;
   this.sobrenome = sobrenome;

   // vai congelar o objeto this e impedir a alteração dos valores e criação de novas chaves ou métodos
   // somente alterações realizadas antes da declaracão do freeze serão realizadas
   Object.freeze(this);
}

//a palavra reserva new vai criar um objeto vazio e "pegar" a palava reservada this
// e atrelar ao objeto criado
const p2 = new Pessoa("Luiz", "Miranda"); //nao pode esquecer da palava new nesse caso
console.log(p2);
