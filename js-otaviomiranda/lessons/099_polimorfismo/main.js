// Superclasse
function Conta(agencia, conta, saldo) {
   this.agencia = agencia;
   this.conta = conta;
   this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
   if (this.saldo < valor) {
      console.log(
         `Saldo insuficiente: R$ ${this.saldo.toFixed(2).replace('.', ',')}`
      );
      return;
   }

   this.saldo -= valor;
   this.verSaldo();
};

Conta.prototype.depositar = function (valor) {
   this.saldo += valor;
   this.verSaldo();
};

Conta.prototype.verSaldo = function () {
   console.log(
      `Ag./C: ${this.agencia}/${this.conta} | ` +
         `Saldo: R$ ${this.saldo.toFixed(2).replace('.', ',')}`
   );
};

function ContaCorrente(agencia, conta, saldo, limite) {
   Conta.call(this, agencia, conta, saldo);
   this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
   if (valor > this.saldo + this.limite) {
      console.log(
         `Saldo insuficiente: R$ ${this.saldo.toFixed(2).replace('.', ',')}`
      );
      return;
   }

   this.saldo -= valor;
   this.verSaldo();
};

function Poupanca(agencia, conta, saldo) {
   Conta.call(this, agencia, conta, saldo);
}

Poupanca.prototype = Object.create(Conta.prototype);
Poupanca.prototype.constructor = Poupanca;

const cc = new ContaCorrente(11, 22, 0, 100);
cc.depositar(10);
cc.sacar(110);
cc.sacar(1);

const cp = new Poupanca(12, 33, 0);
cp.depositar(10);
cp.sacar(110);
cp.sacar(1);

// const conta1 = new Conta(11, 22, 10);
// conta1.depositar(11);
// conta1.depositar(10);
// conta1.sacar(30);
// conta1.sacar(0.01);
