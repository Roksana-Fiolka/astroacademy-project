
//quiz javascript


const options = Array.from(document.getElementsByClassName("option-text"));

const progressText = document.getElementById('progressText');
const progressionBarComplete = document.getElementById('progressionBarComplete');
const resultText = document.getElementById('score');
const question = document.getElementById("question");


//zmienne
let questionCount = 0;

let presentQuestion = {};
let result = 0; // wynik zaczyna liczyć od 0
let accessibleQuestions = []; //lista z pytaniami, jakie są dostępne
let answerDelay = false; //potrzebne do dodania czasu do odpowiedzi

let questions = [];


//stałe
const RIGHT_ANSWER_BONUS = 20;
const QUESTIONS_NUMBER = 3;


fetch("questions.json")
    .then(res =>{
        return res.json();
    })
    .then(workingQuestions =>{
        console.log(workingQuestions);
        questions = workingQuestions;
        startQuiz();
    })
    .catch(err =>{
        console.log(err);
    });




startQuiz = () => {

    questionCount = 0;
    result = 0;
    accessibleQuestions = [...questions]; // spread operator
    console.log(accessibleQuestions);
    getNewQuery();

};

getNewQuery = ( ) => {

    if(accessibleQuestions.length == 0 || questionCount  >= QUESTIONS_NUMBER){
        localStorage.setItem("mostRecentScore", result);

        //przejscie do strony końcowej
        return window.location.assign("/finished.html");

    }
    questionCount++; // rozpoczęcie quizu zwiększa licznik o 1
    progressText.innerText = 'PYTANIE ' + "" + questionCount + "/" + QUESTIONS_NUMBER; //pokazanie numeru pytania na ekranie

    //progress bar się zmienia
    progressionBarComplete.style.width = `${(questionCount / QUESTIONS_NUMBER) * 100}%`;

    const randomQuestion = Math.floor(Math.random() * accessibleQuestions.length); //losowe pytanie
    presentQuestion = accessibleQuestions[randomQuestion];
    question.innerText = presentQuestion.question;  //wyświetla pytanie na stronie


    options.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = presentQuestion['choice' + number];

    })
    accessibleQuestions.splice(randomQuestion, 1); //the same question wont appear twice


    answerDelay = true;
};


options.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!answerDelay) return; //jeśli strona się jeszcze nie załadowala, to użytkownik nie moźe odpowiedzieć na pytanie

        answerDelay = false;
        const chosenAnswer = e.target;
        const choosenAnswer = chosenAnswer.dataset["number"];


        const selectedAnswer = choosenAnswer == presentQuestion.answer ? 'correct' : 'incorrect';

        if(selectedAnswer == 'correct'){
            increaseScore(RIGHT_ANSWER_BONUS);
        }

        chosenAnswer.parentElement.classList.add(selectedAnswer);

        setTimeout( () => {
            chosenAnswer.parentElement.classList.remove(selectedAnswer);
            getNewQuery(); //nowe pytanie



        },1000);

    });

});

increaseScore = num =>{
    result += num;
    resultText.innerText = result;

};