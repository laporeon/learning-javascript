(function () {
  /*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."

  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */

  function DOM(elements) {
    this.element = document.querySelectorAll(elements);
  }

  DOM.prototype.on = function on(eventType, callback) {
    this.element.forEach(function (element) {
      element.addEventListener(eventType, callback, false);
    });
  };

  DOM.prototype.get = function get() {
    return this.element;
  };

  var $form = new DOM('[data-js="form"]');
  var $cepInput = new DOM('[data-js="cep-input"]');
  var $status = new DOM('[data-js="status"]');
  var $logradouro = new DOM('[data-js="logradouro"]');
  var $bairro = new DOM('[data-js="bairro"]');
  var $estado = new DOM('[data-js="estado"]');
  var $cidade = new DOM('[data-js="cidade"]');
  var $cep = new DOM('[data-js="cep"]');
  var ajax = new XMLHttpRequest();

  $form.on("submit", handleFormSubmit);

  function handleFormSubmit(e) {
    e.preventDefault();
    ajax.open("GET", replaceCep("https://ws.apicep.com/cep/[CEP].json"));
    ajax.send();
    getMsg("loading");
    ajax.addEventListener("readystatechange", handleStateChange);
  }

  function handleStateChange() {
    if (isRequestOk()) {
      getMsg("ok");
      fillCepFields();
    }
  }

  function fillCepFields() {
    var data = parseData();
    console.log(data);
    if (data.status == 404) {
      getMsg("error");
      data = clearData();
      console.log("data error", data);
    }
    $logradouro.get()[0].textContent = data.address;
    $bairro.get()[0].textContent = data.district;
    $estado.get()[0].textContent = data.state;
    $cidade.get()[0].textContent = data.city;
    $cep.get()[0].textContent = data.code;
  }

  function clearData() {
    return {
      logradouro: "*",
      bairro: "*",
      uf: "*",
      localidade: "*",
      cep: "*",
    };
  }

  function getMsg(type) {
    var messages = {
      error: replaceCep("Não encontramos o endereço para o CEP [CEP]."),
      ok: replaceCep("Endereço referente ao CEP [CEP]:"),
      loading: replaceCep("Buscando informações para o CEP [CEP]..."),
    };
    $status.get()[0].textContent = messages[type];
  }

  function replaceCep(str) {
    return str.replace("[CEP]", clearCep());
  }

  function clearCep() {
    return $cepInput.get()[0].value.replace(/\D+/g, "");
  }

  function parseData() {
    var result;
    try {
      result = JSON.parse(ajax.responseText);
    } catch (e) {
      result = null;
    }
    return result;
  }

  function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
  }
})();
