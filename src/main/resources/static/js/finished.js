const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');


const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

console.log(highScores);

finalScore.innerText = mostRecentScore;

saveHighScore = (e) =>{
    console.log("clicked");
    e.preventDefault();

    const score = {
        score: mostRecentScore

    };

    highScores.push(score);

}