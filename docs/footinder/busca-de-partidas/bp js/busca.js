//Funcionalidade que mostra cards de todas as peladas criadas//

function criarCardsPeladas() {
    let peladas = JSON.parse(localStorage.getItem("peladas"));
    if (peladas && peladas.length > 0) {
        let mainElement = document.querySelector("main");
        for (let i = peladas.length - 1; i >= 0; i--) {
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
            `;
            mainElement.innerHTML += partidaHTML;
        }
    }
}

function verDetalhes(id) {
    window.location.href = `../carddetails/carddetails.html?id=${id}`;
  }

document.addEventListener("DOMContentLoaded", criarCardsPeladas);