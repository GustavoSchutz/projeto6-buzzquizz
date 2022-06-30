function criacaoDeQuizz (){

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
function paginaQuizz(){
    let tela1 = document.getElementById("tela1");
    tela1.classList.toggle("escondido");
}