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
    console.log(quizzList.data);
}
getQuizzlist()