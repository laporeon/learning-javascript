(function (win, doc) {
  /*
  Essa semana você terá dois desafios:
  1) Revisar todo o contéudo passado até aqui, e ver se você realmente entendeu
  tudo o que foi passado! Se tiver dúvidas, anote, e então abra issues,
  ou comente no seu pull request mesmo, que eu irei ajudá-lo a entender
  o que não ficou tão claro das aulas anteriores.
  É essencial que você entenda todo o conteúdo que foi passado até aqui,
  para que possamos prosseguir para a parte mais avançada do curso :D
  2) Estudar eventos!
  Acesse a página do MDN:
  https://developer.mozilla.org/en-US/docs/Web/Events#Categories
  Tente aplicar na prática alguns dos eventos que estão ali e coloque nesse
  desafio os experimentos legais que você conseguir desenvolver :D
  */

  "use strict";

  var name;
  var $inputName = doc.querySelector('[data-js="name"]');
  var $uppercase = doc.querySelector('[data-js="uppercase"]');
  var $lowercase = doc.querySelector('[data-js="lowercase"]');
  var $invert = doc.querySelector('[data-js="invert"]');
  var $changeName = doc.querySelector('[data-js="changeName"]');
  var $clickHere = doc.querySelector('[data-js="clickHere"]');

  function init() {
    getName();
    addEventListeners();
  }

  function getName() {
    name = prompt("Qual é o seu nome?");
    fillNameInput(name);
  }

  function fillNameInput(name) {
    $inputName.value = name;
  }

  function initEventListener(element, event, callback) {
    element.addEventListener(event, callback, false);
  }

  function addEventListeners() {
    initEventListener($uppercase, "click", convertToUpperCase);
    initEventListener($lowercase, "click", convertToLowerCase);
    initEventListener($invert, "click", invertLetters);
    initEventListener($changeName, "click", changeNameValue);
    initEventListener($clickHere, "mouseover", changeButtonInnerText);
  }

  function convertToUpperCase() {
    console.log("oi");
    $inputName.value = $inputName.value.toUpperCase();
  }

  function convertToLowerCase() {
    $inputName.value = $inputName.value.toLowerCase();
  }

  function invertLetters() {
    $inputName.value = $inputName.value.split("").reverse().join("");
  }

  function changeNameValue() {
    var confirmNameChange = confirm("Tem certeza que deseja mudar o nome?");
    if (!confirmNameChange) return;
    name = prompt("Digite o novo nome: ");
    $inputName.value = name;
  }

  function changeButtonInnerText() {
    $clickHere.innerText = "Este botão não faz nada!";
  }

  init();
})(window, document);
