const request = obj => {
   const xhr = new XMLHttpRequest();
   xhr.open(obj.method, obj.url, true); // manda o método GET ou POST, a URL e se é síncrono (true) ou assíncrono (false)
   xhr.send(); // se fosse POST, deveria mandar os dados, como vamos fazer GET, não precisamos

   // checar quando a requisição for terminada
   xhr.addEventListener('load', () => {
      if (xhr.status >= 200 && xhr.status < 300) {
         obj.success(xhr.responseText);
      } else {
         obj.error(xhr.statusText);
      }
   });
};

document.addEventListener('click', e => {
   const el = e.target;
   const tag = el.tagName.toLowerCase();

   if (tag === 'a') {
      e.preventDefault();
      carregaPagina(el);
   }
});

function carregaPagina(el) {
   const href = el.getAttribute('href');

   request({
      method: 'GET',
      url: href,
      success(response) {
         carregaResultado(response);
      },
      error(errorText) {
         console.log(errorText);
      }
   });
}

function carregaResultado(response) {
   const resultado = document.querySelector('.resultado');
   resultado.innerHTML = response;
}

// UTILIZANDO PROMISES
const request = obj => {
   return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(obj.method, obj.url, true);
      xhr.send();

      xhr.addEventListener('load', () => {
         if (xhr.status >= 200 && xhr.status < 300) {
            resolve(xhr.responseText);
         } else {
            reject(xhr.statusText);
         }
      });
   });
};

async function carregaPagina(el) {
   const href = el.getAttribute('href');

   const objConfig = {
      method: 'GET',
      url: href
   };

   try {
      const response = await request(objConfig);
      carregaResultado(response);
   } catch (e) {
      console.log(e);
   }
}
