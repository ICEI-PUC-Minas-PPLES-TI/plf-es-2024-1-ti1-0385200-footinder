function getPeladaId() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('id');
}

window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM completamente carregado');
    const peladaId = parseInt(getPeladaId());
    console.log('Pelada ID:', peladaId);
    let peladas = JSON.parse(localStorage.getItem("peladas")) || [];
    console.log('Peladas:', peladas);
    let pelada = peladas.find(p => p.id === peladaId);
    console.log('Pelada Encontrada:', pelada);

    const cardElement = document.querySelector('.card');

    if (cardElement) {
        if (pelada) {
            let cardHTML = `
                <div class="card-content">
                    <h2 class="card-title">${pelada.nome}</h2>
                    <p><strong>Local:</strong> <span>${pelada.local}</span></p>
                    <p><strong>Número de atletas:</strong> <span>${pelada.numAtletas}</span></p>
                    <p><strong>Data:</strong> <span>${pelada.dia}</span></p>
                    <p><strong>Horário:</strong> <span>${pelada.hora}</span></p>
                    <p><strong>Duração da pelada:</strong> <span>${pelada.duração}</span></p>
                    <p><strong>Estilo de quadra:</strong> <span>${pelada.quadra}</span></p>
                    <p><strong>Número do administrador:</strong> <span>${pelada.admin}</span></p>
                    <img id="imagemPelada" src="${pelada.imagem}" alt="Foto do local">
                    <p><strong>Descrição da Pelada:</strong> <span>${pelada.descrição}</span></p>
                    <button id="participar" onclick="participarDaPelada()">Participar</button>
                </div>
            `;

            cardElement.innerHTML = cardHTML;
        } else {
            cardElement.innerHTML = '<p>Pelada não encontrada.</p>';
        }
    } else {
        console.error('Elemento .card não encontrado');
    }
});

//Função de participação//


function participarDaPelada(){
    Swal.fire({
        title: "Parabéns",
        text: "Agora voce está participando dessa pelada!",
        icon: "success"
      });

document.getElementById("participar").innerHTML = "Você já está participando dessa pelada";

document.getElementById("participar").disabled = true;

const users = JSON.parse(localStorage.getItem('users'));
  const userLogado = users.find(user => user.isLoggedIn === true);
  const nomeUsuario = userLogado.nome;

  // Pega a pelada atual
  let peladas = JSON.parse(localStorage.getItem("peladas"));
  let peladaAtual = peladas[peladas.length - 1];

  // Adiciona o participante à pelada
  if (!peladaAtual.participantes) {
    peladaAtual.participantes = [];
  }
  peladaAtual.participantes.push(nomeUsuario);

  // Salva a pelada novamente
  localStorage.setItem("peladas", JSON.stringify(peladas));
}
//Eu queria que essa function também ao executar ela , criasse um array "participantes" dentro do objeto "pelada" e pegasse o valor registrado em usuário e colocasse nesse array , mas eu não consegui infelizmente//