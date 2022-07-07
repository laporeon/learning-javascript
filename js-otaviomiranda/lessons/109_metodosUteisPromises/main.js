function rand(min, max) {
   min *= 1000;
   max *= 1000;
   return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
   return new Promise((resolve, reject) => {
      // if (typeof msg !== 'string') {
      //    reject('CAI NO ERRO');
      //    return;
      // }

      setTimeout(() => {
         if (typeof msg !== 'string') {
            reject('CAI NO ERRO');
            return;
         }
         resolve(msg.toUpperCase() + ' - Passei na promise.');
      }, tempo);
   });
}

const promises = [
   esperaAi('Promise 1', rand(1, 5)),
   esperaAi('Promise 2', rand(1, 5)),
   esperaAi('Promise 3', rand(1, 5)),
   esperaAi(1000, rand(1, 5))
];

// Promise.all : vai passar um array com promises ou valores já resolvidos e vai entergar uma promessa
// só com os valores dentro do array
Promise.all(promises)
   .then(function (valor) {
      console.log(valor);
   })
   .catch(function (error) {
      console.log(error);
   });

// Promise.race : semelhante ao race, porém retorna o valor apenas da primeira que for resolvida
Promise.race(promises)
   .then(function (valor) {
      console.log(valor);
   })
   .catch(function (error) {
      console.log(error);
   });

// Promise.resolve
function baixaPagina() {
   const emCache = true;
   if (emCache) {
      return Promise.resolve('Página em cache');
   } else {
      return esperaAi('Baixei a página', 3000);
   }
}

baixaPagina()
   .then(dadosPagina => {
      console.log(dadosPagina);
   })
   .catch(e => console.log(e));

// Promise.reject
function baixaPagina() {
   const emCache = true;
   if (emCache) {
      return Promise.reject('Página em cache');
   } else {
      return esperaAi('Baixei a página', 3000);
   }
}

baixaPagina()
   .then(dadosPagina => {
      console.log(dadosPagina);
   })
   .catch(e => console.log('ERRO', e));
