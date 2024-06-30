//Funcionalidade para os cards//

function criarCardsPeladas() {
    let peladas = JSON.parse(localStorage.getItem("peladas"));
    if (peladas && peladas.length > 0) {
      let mainElement = document.querySelector("main");
      for (let i = peladas.length - 1; i >= peladas.length - 2; i--) {
        let pelada = peladas[i];
        let partidaHTML = `
          <div class="partida">
            <div>
              <label>Integrantes:<span class="integrantes">${pelada.numAtletas}</span></label>
              <span class="data">${pelada.dia} ${pelada.hora}</span>
            </div>
            <div>
              <span class="local">${pelada.local}</span>
              <span class="quadra">${pelada.quadra}</span>
            </div>
            <button onclick="verDetalhes(${pelada.id})">Ver detalhes</button>
          </div>
        `
        mainElement.innerHTML += partidaHTML;
      }
    }
  }

  function verDetalhes(id) {
    window.location.href = `../carddetails/carddetails.html?id=${id}`;
  }


  
  document.addEventListener("DOMContentLoaded", criarCardsPeladas);

  //Funcionalidade para acessar as páginas se estiver logado(ela verifica o estado de login armazenado no localStorage também)//

function checkLoginStatus() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const links = document.querySelectorAll('a[data-requires-login]');

  links.forEach(link => {
      if (isLoggedIn) {
          link.setAttribute('onclick', 'return true');
      } else {
          link.setAttribute('onclick', 'return false');
          link.addEventListener('click', function(event) {
              event.preventDefault();
              alert('Você precisa estar logado para acessar essa página.');
          });
      }
  });
}

window.onload = checkLoginStatus;

//Funcionalidade que se estiver logado , modifica o botão de login para que aapreça o nome de usuário//

document.addEventListener('DOMContentLoaded', function() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const username = localStorage.getItem('currentUser');

  if (isLoggedIn && username) {
      const lB = document.getElementById('lB');
      lB.textContent = username;
      lB.href = '#';  // Opcional: desabilitar link se já estiver logado
  }
});
