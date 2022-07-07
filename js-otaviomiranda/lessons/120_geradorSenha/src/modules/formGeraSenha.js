import geraSenha from './geradores';

const resultado = document.querySelector('.resultado');
const caracteres = document.querySelector('.caracteres');
const maiusculas = document.querySelector('.maiusculas');
const minusculas = document.querySelector('.minusculas');
const numeros = document.querySelector('.numeros');
const simbolos = document.querySelector('.simbolos');
const gerarSenha = document.querySelector('.gerar-senha');

export default () => {
  gerarSenha.addEventListener('click', () => {
    resultado.innerHTML = gera();
  });
};

function gera() {
  const senha = geraSenha(
    caracteres.value,
    maiusculas.checked,
    minusculas.checked,
    numeros.checked,
    simbolos.checked
  );

  return senha || 'Nada selecionado.';
}
