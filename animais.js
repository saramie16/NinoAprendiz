//Áudios nas imagens
const imageContainers = document.querySelectorAll('.image-container');
const sounds = {
  'PERRO': 'audios/Perro.mp3',
  'TIBURÓN': 'audios/Tiburón.mp3',
  'PATO':'audios/Pato.mp3',
  'CABALLO':'audios/Caballo.mp3',
  'CERDO':'audios/Cerdo.mp3',
  'GALLINA':'audios/Gallina.mp3',
  'CONEJO':'audios/Conejo.mp3',
  'GATO':'audios/Gato.mp3',
  'LEÓN':'audios/León.mp3',
  'VACA':'audios/Vaca.mp3',
};

imageContainers.forEach((container) => {
  const image = container.querySelector('.image');

  container.addEventListener('click', () => {
    playSound(image.alt);
  });

  function playSound(imageAlt) {
    const audio = new Audio(sounds[imageAlt]);
    audio.play();
  }
});
const images = document.querySelectorAll('.image');
const words = document.querySelectorAll('.word');

// Adiciona eventos de clique às imagens e palavras
images.forEach((image) => {
  image.addEventListener('click', selectImage);
});

words.forEach((word) => {
  word.addEventListener('click', selectWord);
});

let selectedImage = null;
let selectedWord = null;

// Função chamada quando uma imagem é selecionada
function selectImage() {
  // Remove a classe de destaque de qualquer imagem selecionada anteriormente
  if (selectedImage) {
    selectedImage.classList.remove('selected');
  }

  // Adiciona a classe de destaque à imagem selecionada
  this.classList.add('selected');

  // Armazena a imagem selecionada
  selectedImage = this;

  // Verifica se há uma palavra selecionada para verificar a correspondência
  checkMatch();
}

// Função chamada quando uma palavra é selecionada
function selectWord() {
  // Remove a classe de destaque de qualquer palavra selecionada anteriormente
  if (selectedWord) {
    selectedWord.classList.remove('selected');
  }

  // Adiciona a classe de destaque à palavra selecionada
  this.classList.add('selected');

  // Armazena a palavra selecionada
  selectedWord = this;

  // Verifica se há uma imagem selecionada para verificar a correspondência
  checkMatch();
}

// Função para verificar se a imagem e a palavra selecionadas correspondem
function checkMatch() {
  if (selectedImage && selectedWord) {
    // Lógica de verificação de correspondência
    if (selectedImage.alt === selectedWord.textContent) {
      // Correspondência encontrada
      alert('Correspondência correta!');
    } else {
      // Correspondência incorreta
      alert('Correspondência incorreta!');
    }

    // Limpa a seleção
    selectedImage.classList.remove('selected');
    selectedWord.classList.remove('selected');
    selectedImage = null;
    selectedWord = null;
  }
}