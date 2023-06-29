const alimentos = [
    { alt: "Pera", inputId: "input1", imgId: "alimento1" },
    { alt: "Manzana", inputId: "input2", imgId: "alimento2"},
    { alt: "Plátano", inputId: "input3", imgId: "alimento3"},
    { alt: "Palomitas", inputId: "input4", imgId: "alimento4"},
    { alt: "Piña", inputId: "input5", imgId: "alimento5"},
    { alt: "Zanahoria", inputId: "input6", imgId: "alimento6"},
    { alt: "Chocolate", inputId: "input7", imgId: "alimento7"},
    { alt: "Helado", inputId: "input8", imgId: "alimento8"},
  ];
  
  function playAudio(audioId) {
    const audio = document.getElementById(audioId);
    audio.play();
  }
  
  function checkAnswer(inputId, imgId) {
    const alimento = alimentos.find(item => item.inputId === inputId);
    const imgElement = document.getElementById(imgId);
    const inputElement = document.getElementById(inputId);
  
    if (inputElement.value.toLowerCase() === alimento.alt.toLowerCase()) {
      inputElement.classList.remove("wrong");
      inputElement.classList.add("correct");
      inputElement.disabled = true;
      imgElement.classList.remove("wrong");
      imgElement.classList.add("correct");
    } else {
      inputElement.classList.remove("correct");
      inputElement.classList.add("wrong");
      imgElement.classList.remove("correct");
      imgElement.classList.add("wrong");
    }
  
    checkWin();
  }
  
  function checkWin() {
    const inputs = document.getElementsByTagName("input");
    let allCorrect = true;
  
    for (const input of inputs) {
      if (!input.disabled || input.classList.contains("wrong")) {
        allCorrect = false;
        break;
      }
    }
  
    for (const input of inputs) {
      input.value = "";
      input.disabled = false;
      input.classList.remove("correct", "wrong");
    }
  }
  