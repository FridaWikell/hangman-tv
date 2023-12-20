// General
let keyboardAbc = document.getElementById("keyboard");

// Creating keyboard - from https://www.codingnepalweb.com/build-hangman-game-html-javascript/

// HÄR SAKNAS EN EVENT LISTENER!
for (let i = 97; i <= 122; i++) {
    let button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardAbc.appendChild(button);
}

// Answers and hints
let hintAnswers = [{
        hint: "A hero with a green brother",
        answer: "super mario"
}, {
    hint: "His mission is to save goddess Palutena",
    answer: "kid icarus"
}];
        

// Randomise question
function selectAQuestion() {
let randomQuestion = hintAnswers[Math.floor(Math.random() * hintAnswers.length)];

let randomQuestionHint = Object.values(randomQuestion)[0];
let randomQuestionAnswer = Object.values(randomQuestion)[1];

document.getElementById("hint").innerText = randomQuestionHint;
}

selectAQuestion();