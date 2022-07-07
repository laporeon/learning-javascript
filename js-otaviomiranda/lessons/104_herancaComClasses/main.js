class DispositivoEletronico {
   constructor(nome) {
      this.nome = nome;
      this.ligado = false;
   }

   ligar() {
      if (this.ligado) {
         console.log(`${this.nome} já está ligado.`);
         return;
      }

      this.ligado = true;
   }
   desligar() {
      if (!this.ligado) {
         console.log(`${this.nome} já está desligado.`);
         return;
      }

      this.ligado = false;
   }
}

const d1 = new DispositivoEletronico('Lâmpada');
console.log(d1);

class Smartphone extends DispositivoEletronico {
   constructor(nome, cor, modelo) {
      super(nome); // chamando o construtor da classe pai
      this.cor = cor;
      this.modelo = modelo;
   }
}

const s1 = new Smartphone('Samsung', 'preto', 'Galaxy A01');
console.log(s1);

class Tablet extends DispositivoEletronico {
   constructor(nome, temWifi) {
      super(nome);
      this.temWifi = temWifi;
   }

   ligar() {
      console.log('Olha, você alterou o método ligar.');
   }
}

const t1 = new Tablet('Xiaomi', true);
console.log(t1);
t1.ligar();
