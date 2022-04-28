const finalScore = document.getElementById('finalScore');
const lastScore = localStorage.getItem('mostRecentScore');


const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

console.log(highScores);

finalScore.innerText = lastScore;

saveHighScore = (e) =>{
    console.log("clicked");
    e.preventDefault();

    const score = {
        score: lastScore

    };

    highScores.push(score);

}