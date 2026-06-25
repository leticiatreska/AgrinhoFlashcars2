const questions = [

{
question: "O que é sustentabilidade?",
answers: [
"a) Usar recursos naturais sem limites.",
"b) Atender às necessidades atuais sem comprometer as futuras gerações.",
"c) Produzir mais resíduos para aumentar o consumo.",
"d) Explorar todos os recursos disponíveis."
],
correct: 1
},

{
question: "Qual atitude ajuda a preservar o meio ambiente?",
answers: [
"a) Jogar lixo em terrenos baldios.",
"b) Desperdiçar água ao escovar os dentes.",
"c) Separar materiais recicláveis para coleta seletiva.",
"d) Queimar lixo doméstico."
],
correct: 2
},

{
question: "Qual é uma fonte de energia renovável?",
answers: [
"a) Petróleo.",
"b) Carvão mineral.",
"c) Energia solar.",
"d) Gás natural."
],
correct: 2
},

{
question: "Qual dos materiais abaixo é comumente reciclado na coleta seletiva?",
answers: [
"a) Vidro.",
"b) Restos de comida.",
"c) Papel higiênico usado.",
"d) Guardanapo engordurado."
],
correct: 0
},

{
question: "Qual é o principal objetivo da coleta seletiva?",
answers: [
"a) Misturar todos os resíduos.",
"b) Facilitar a reciclagem dos materiais.",
"c) Aumentar a quantidade de lixo.",
"d) Eliminar a necessidade de aterros sanitários."
],
correct: 1
},

{
question: "Como o uso de transporte coletivo contribui para a sustentabilidade?",
answers: [
"a) Aumenta a emissão de poluentes.",
"b) Consome mais combustível por pessoa.",
"c) Reduz a quantidade de veículos nas ruas e a poluição.",
"d) Não gera nenhum benefício ambiental."
],
correct: 2
}

];

const questionElement =
document.getElementById("question");

const answersElement =
document.getElementById("answers");

const nextBtn =
document.getElementById("nextBtn");

const feedback =
document.getElementById("feedback");

const scoreText =
document.getElementById("score");

const questionNumber =
document.getElementById("questionNumber");

const result =
document.getElementById("result");

const progressFill =
document.getElementById("progressFill");

let currentQuestion = 0;
let score = 0;

loadQuestion();

function loadQuestion(){

const q = questions[currentQuestion];

questionNumber.textContent =
`Pergunta ${currentQuestion + 1} de ${questions.length}`;

questionElement.textContent =
q.question;

answersElement.innerHTML = "";

feedback.textContent = "";

nextBtn.disabled = true;

const progress =
(currentQuestion / questions.length) * 100;

progressFill.style.width =
progress + "%";

q.answers.forEach((answer,index)=>{

const button =
document.createElement("button");

button.classList.add("answer");

button.textContent = answer;

button.addEventListener(
"click",
()=>checkAnswer(index,button)
);

answersElement.appendChild(button);

});

}

function checkAnswer(selected,button){

const correct =
questions[currentQuestion].correct;

const allAnswers =
document.querySelectorAll(".answer");

allAnswers.forEach(btn=>{

btn.disabled = true;

});

allAnswers[correct]
.classList.add("correct");

if(selected === correct){

score++;

button.classList.add("correct");

feedback.innerHTML =
"✅ Resposta correta!";

}else{

button.classList.add("wrong");

feedback.innerHTML =
"❌ Resposta incorreta.";

}

scoreText.textContent =
`Acertos: ${score}`;

nextBtn.disabled = false;
}

nextBtn.addEventListener("click",()=>{

currentQuestion++;

if(currentQuestion < questions.length){

loadQuestion();

}else{

showResult();

}

});

function showResult(){

document.querySelector(".quiz-card")
.style.display = "none";

result.classList.remove("hidden");

const percentage =
Math.round(
(score / questions.length) * 100
);

result.innerHTML = `

<h2>🎉 Quiz Finalizado!</h2>

<h3>${score} de ${questions.length} acertos</h3>

<p style="margin-top:15px">
Aproveitamento: ${percentage}%
</p>

<button onclick="restartQuiz()">
🔄 Recomeçar Quiz
</button>

`;

progressFill.style.width = "100%";
}

function restartQuiz(){

currentQuestion = 0;
score = 0;

scoreText.textContent =
"Acertos: 0";

result.classList.add("hidden");

document.querySelector(".quiz-card")
.style.display = "block";

loadQuestion();

}
