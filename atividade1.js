const imagensContainer = document.querySelector('.carros');

// Seleciona todas as imagens dentro do contêiner '.carros'
const imagens = document.querySelectorAll('.carros img');

// Seleciona os botões de navegação "anterior" e "próximo"
const prevButton = document.querySelector('.anterior');
const nextButton = document.querySelector('.proximo');

// Variável que controla o índice da imagem atual
let indiceatual = 0;

// Função para atualizar o carrossel, movendo o contêiner de imagens
function atualizarcarrosel() {
  // Calcula o desvio para mover as imagens para a posição correta
  const desvio = -indiceatual * 400; // 400px é a largura de cada imagem
  imagensContainer.style.transform = `translateX(${desvio}px)`; // Aplica o desvio ao contêiner das imagens
}

// Adiciona o evento de clique no botão "anterior"
prevButton.addEventListener('click', () => {
  // Atualiza o índice da imagem atual para a anterior, ou volta para a última imagem se estiver na primeira
  indiceatual = (indiceatual - 1 + imagens.length) % imagens.length; 
  atualizarcarrosel(); // Atualiza o carrossel para mostrar a nova imagem
});

// Adiciona o evento de clique no botão "próximo"
nextButton.addEventListener('click', () => {
  // Atualiza o índice da imagem atual para a próxima, ou volta para a primeira imagem se estiver na última
  indiceatual = (indiceatual + 1) % imagens.length; 
  atualizarcarrosel(); // Atualiza o carrossel para mostrar a nova imagem
});