// Escreva uma função chamada ePaisagem que recebe dois argumentos: largura e altura
// de uma imagem (number). Retorn true se a imagem estiver no modo paisagem.

// MODO 1
function ePaisagem(largura, altura) {
   return largura > altura ? true : false;
}

// MODO 2
function ePaisagem(largura, altura) {
   return largura > altura;
}

// MODO 3
const ePaisagem = (largura, altura) => {
   largura > altura;
};

console.log(ePaisagem(1920, 1080));
