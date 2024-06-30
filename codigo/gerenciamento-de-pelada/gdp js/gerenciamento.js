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

//Funcionalidade que faz com que eu apague a pelada já registrada://

function excluir() {
  localStorage.removeItem("peladas");
}

//Funcionalidade que faz com que os dados preenchidos apareçam nos campos html://

let peladas = JSON.parse(localStorage.getItem("peladas"));

nomePeladaInput.value = peladas[peladas.length - 1].nome
nomeLocalInput.value = peladas[peladas.length - 1].local
numAtletasInput.value = peladas[peladas.length - 1].numAtletas
nomeDayInput.value = peladas[peladas.length - 1].dia
nomeHourInput.value = peladas[peladas.length - 1].hora
nomeDurationInput.value = peladas[peladas.length - 1].duração
nomeStadiumType.value = peladas[peladas.length - 1].quadra
nomeTelephoneInput.value = peladas[peladas.length - 1].admin
//inputFile.value = peladas[peladas.length - 1].imagem
nomeDescriptionInput.value = peladas[peladas.length - 1].descrição

//funcionalidade que faz com que eu edite os dados já salvos no LocalStorage://



function editarPelada() {
  let peladas = JSON.parse(localStorage.getItem("peladas"));

  if (peladas!== null && peladas!== undefined) {
    let ultimaPelada = peladas[peladas.length - 1];

    if (ultimaPelada) {
      ultimaPelada.nome = nomePeladaInput.value;
      ultimaPelada.local = nomeLocalInput.value;
      ultimaPelada.numAtletas = numAtletasInput.value;
      ultimaPelada.dia = nomeDayInput.value;
      ultimaPelada.hora = nomeHourInput.value;
      ultimaPelada.quadra = nomeStadiumType.value;
      ultimaPelada.admin = nomeTelephoneInput.value;
      ultimaPelada.duração = nomeDurationInput.value;
      ultimaPelada.imagem = inputFile.value;
      ultimaPelada.descrição = nomeDescriptionInput.value;
      ultimaPelada.lista = nomeListaLi.value;

      localStorage.setItem("peladas", JSON.stringify(peladas));
      alert("Pelada editada com sucesso!");
    } else {
      alert("Nenhuma pelada encontrada!");
    }
  } else {
    alert("Nenhuma pelada encontrada no local storage!");
  }
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
