function calculateResult() {
    const form = document.getElementById('quizForm');
    const data = new FormData(form);
     const scores = {
     macc: 0,
     coldbrew: 0,
     refresher: 0,
     matcha: 0,
     psl: 0
     };

    for (let entry of data.entries()) {
        scores[entry[1]]++;
    }

    let topDrink = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);

    localStorage.setItem("drinkResult", topDrink);
    window.location.href = "result.html";
}

document.addEventListener("DOMContentLoaded", function () {
    const result = localStorage.getItem("drinkResult");
    const resultText = {
        macc: "You're an Iced Caramel Macchiato: bold, trendy, and the center of attention!",
        coldbrew: "You're a Vanilla Sweet Cream Cold Brew: chill, cool, and effortlessly awesome.",
        refresher: "You're a Strawberry Açaí Refresher: fun, adventurous, and always full of energy!",
        matcha: "You're a Matcha Latte: creative, calm, and a little mysterious.",
        psl: "You're a Pumpkin Spice Latte: cozy, kind, and everyone’s favorite in the fall."
    };

    const revealButton = document.getElementById("revealButton");
    const resultDiv = document.getElementById("resultText");

    revealButton.addEventListener("click", function () {
    if (result && resultText[result]) {
        resultDiv.textContent = resultText[result];
    } else {
        resultDiv.textContent = "Oops! Something went wrong.";
    }
        resultDiv.display = "block";
    });
});

const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

function goToQuiz(){
    window.location.href = "quiz.html";
}
function goToResults(){
    window.location.href = "result.html"
}