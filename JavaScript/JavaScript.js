let quiz;
let qtdPerguntas;
let qtdNiveis;

function criacaoDeQuizz (){
    document.querySelector(".tela1").classList.add("apaga");
    document.querySelector(".tela3").classList.remove("apaga");
}

function prosseguirParaPergunta(){
    document.querySelector(".tela3").classList.add("apaga");
    document.querySelector(".tela3pergunta").classList.remove("apaga");
}

function prosseguirParaNiveis(){
    document.querySelector(".tela3pergunta").classList.add("apaga");
    document.querySelector(".tela3niveis").classList.remove("apaga");
}

function getQuizzlist() {
    const promessa = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes");
    promessa.then(writeQuizzlist);
    promessa.catch(alerError);
}
function writeQuizzlist(quizzList) {
    quiz = quizzList.data;
    console.log(quizzList.data)
    renderizarQuiz()
}
getQuizzlist()

function paginaQuizz(){
    let tela1 = document.getElementById("tela1");
    tela1.classList.toggle("escondido");
}

function renderizarQuiz() {

    const container = document.querySelector(".listagem")
  container.innerHTML = '';

  for (let i = 0; i < quiz.length; i++) {

      container.innerHTML += `
    <li class ="${quiz[i].id}">
    <div class="container" onclick="paginaQuizz()">
    <img src="${quiz[i].image}" alt="">
    <div class="text">
        <h6>
         ${quiz[i].title}
        </h6>
    </div>
    <div class="gradient"></div>
</div>
  </li>
`;
}
}


function tela3a() {
    let isValidTitle = tituloDoQuiz.checkValidity();
    let isValidImageURL = imagemDoQuiz.checkValidity();
    let isValidQuestionAmount = quantidadePerguntas.checkValidity();
    let isValidLevelAmount = quantidadeNiveis.checkValidity();
    if (isValidTitle && isValidImageURL && isValidQuestionAmount && isValidLevelAmount) {
        gerarPerguntas();
    }else {
        alert("Dados não estão certos");
        // document.getElementById("tituloDoQuiz").toggleClass(".errou") rodar audio do faustao
    }
}
function gerarPerguntas() {
    qtdPerguntas = document.getElementById("quantidadePerguntas").value;

    qtdNiveis = document.getElementById("quantidadeNiveis").value;

    geradorPerguntas();
    geradorNiveis();
}
function geradorPerguntas() {
    console.log("gerou?")
    console.log(qtdPerguntas)
    const perguntas = document.querySelector(".criandoPerguntas");
    perguntas.innerHTML = '';
  
    for (let i = 1; i <= qtdPerguntas; i++) {
  
        perguntas.innerHTML += `
        <div id="pergunta${i}" class="pergunta">
                    <div class="botaoTartaruga">
                        <h4>Pergunta ${i}</h4>
                        <span><ion-icon name="create-outline"></ion-icon></span>
                    </div>
                    <div class="tartaruga">
                        <input id="textoPergunta${i}" minlength="20" type="text" placeholder="Texto da pergunta" required>
                        <input id="cor${i}" type="color" placeholder="Cor de fundo da pergunta" required>
                        <h4>Resposta Correta</h4>
                        <input id="respostaCorretaPergunta${i}" type="text" placeholder="Resposta correta" required>
                        <input id="imagemCorreta${i}" type="url" placeholder="URL da imagem" required>
                        <h4>Respostas incorretas</h4>
                        <input id="respostaIncorreta${i}" type="text" placeholder="Resposta incorreta 1" required>
                        <input id="imagemIncorreta${i}a" type="url" placeholder="URL da imagem 1" required>
                        <input id="respostaIncorreta${i}" type="text" placeholder="Resposta incorreta 2">
                        <input id="imagemIncorreta${i}b" type="url" placeholder="URL da imagem 2">
                        <input id="respostaIncorreta${i}" type="text" placeholder="Resposta incorreta 3">
                        <input id="imagemIncorreta${i}c" type="url" placeholder="URL da imagem 3">    
                    </div>
                    
                </div>
  `;
  }

  perguntas.innerHTML += `<button class="prosseguir" onclick="tela3b()">Prosseguir para criar níveis</button>`;

}
function geradorNiveis() {
    console.log("gerouniveis?");
    console.log(qtdNiveis);
    const niveis = document.querySelector("#criandoNiveis");
    niveis.innerHTML = '';
  
    for (let i = 1; i <= qtdNiveis; i++) {
  
        niveis.innerHTML += `
        <div id="nivel${i}" class="pergunta">
                    <div class="botaoTartaruga">
                        <h4>Nível ${i}</h4>
                        <span><ion-icon name="create-outline"></ion-icon></span>
                    </div>
                    
                    <div class="tartaruga">
                        <input id="tituloNivel${i}" type="text" minlength="10" placeholder="Título do nível">
                        <input id="acertoMin${i}" type="number" min="0" max="100" placeholder="% de acerto mínima">
                        <input id="imgNivel${i}" type="url" placeholder="URL da imagem do nível">
                        <textarea id="descricaoNivel${i}" class="textoGrande" type="text" minlength="30" placeholder="Descrição do nível"></textarea>
                    </div>
                </div>
  `;
  }

  niveis.innerHTML += `<button class="prosseguir" onclick="tela3b()">Prosseguir </button>`;

}


function tela3b() {
// essa função vai guardar os preenchimentos de anteriores em variaveis e dará push para o array que será enviado para a API

}