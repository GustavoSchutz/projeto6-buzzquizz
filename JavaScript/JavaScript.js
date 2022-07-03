let quiz;

function criacaoDeQuizz (){
    document.querySelector(".tela1").classList.add(".apaga");
    document.querySelector(".tela3").classList.remove(".apaga");
    console.log("ola")
}

function prosseguirParaPergunta(){
    document.querySelector(".tela1").classList.add(".apaga");
    document.querySelector(".tela3").classList.add(".apaga");
    document.querySelector(".tela3-1").classList.remove(".apaga");
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
        console.log('deucerto')
    }else {
        alert("Dados não estão certos")
        document.getElementById("tituloDoQuiz").toggleClass(".errou")
    }
}