// Métodos estáticos sao métodos que podem ser usados sem instanciar a classe
class ControleRemoto {
   constructor(tv) {
      this.tv = tv;
      this.volume = 0;
   }
   //Métodos de instância
   aumentarVolume() {
      this.volume += 2;
   }

   diminuirVolume() {
      this.volume -= 2;
   }

   //Método estático, não tem acesso ao construtor
   static trocaPilha() {
      console.log('Ok, vou trocar.');
      console.log(this.volume); // vai retorna undefined
   }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);

ControleRemoto.trocaPilha();
