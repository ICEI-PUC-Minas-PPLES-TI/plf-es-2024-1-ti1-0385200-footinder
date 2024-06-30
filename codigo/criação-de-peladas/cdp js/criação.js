//Referencias dos elementos HTML usados://

const numAtletasInput = document.querySelector("#number");
const lista = document.querySelector(".Lista ul");
const saveButton = document.querySelector(".save-button");
const nomePeladaInput = document.querySelector("#name");
const nomeLocalInput = document.querySelector("#local");
const nomeDayInput = document.querySelector("#day");
const nomeHourInput = document.querySelector("#hour");
const nomeStadiumType = document.querySelector("#stadium");
const nomeTelephoneInput = document.querySelector("#telephone");
const nomeDurationInput = document.querySelector("#duration");
const inputFile = document.querySelector("#image");
const nomeDescriptionInput = document.querySelector("#description_pelada");
const nomeListaLi = document.querySelector("li");
const pictureImage = document.querySelector(".picture_image");
const pictureImageTxt = "Selecione uma foto do local";
pictureImage.innerHTML = pictureImageTxt;


//Funcionalidade que faz com que ao colocar certo número de atletas , aumenta o número de atletas da lista também://

numAtletasInput.addEventListener("input", (e) => {
  const numAtletas = parseInt(e.target.value);
  if (numAtletas > 0) {
    lista.innerHTML = "";
    for (let i = 1; i <= numAtletas; i++) {
      const listItem = document.createElement("li");
      listItem.contentEditable = "true";
      listItem.textContent = `Jogador${i}`;
      lista.appendChild(listItem);
    }
  }
});

//Salvar dados das peladas://

function salvar() {

  let nomePelada = nomePeladaInput.value;

  let pelada = {
    id: 0,
    nome: nomePelada,
    local: nomeLocalInput.value,
    numAtletas: numAtletasInput.value,
    dia: nomeDayInput.value,
    hora: nomeHourInput.value,
    quadra: nomeStadiumType.value,
    admin: nomeTelephoneInput.value,
    duração: nomeDurationInput.value,
    imagem: inputFile.value,
    descrição : nomeDescriptionInput.value,
    lista: nomeListaLi.value,


  }


  let peladas = JSON.parse(localStorage.getItem("peladas")) || [];
  pelada.id = peladas.length+1
  console.log(peladas);
  peladas.push(pelada);
  localStorage.setItem("peladas", JSON.stringify(peladas));

  pelada.reset();
    window.location.href = "criação.html"; 


}

//Funcionalidade que faz com que apareça o preview da imagem selecionada no input file//

inputFile.addEventListener("change", function(e) {
  const inputTarget = e.target;
  const file = inputTarget.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener('load', function(e){
      const readerTarget = e.target;

      const img = document.createElement('img');
      img.src = readerTarget.result;
      //img.classList.add('#preview-image');
      pictureImage.innerHTML = '';

      pictureImage.appendChild(img);
    });

    reader.readAsDataURL(file);
  }else {
    pictureImage.innerHTML = pictureImageTxt;
  }
});
