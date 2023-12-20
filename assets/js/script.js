// General
let keyboardAbc = document.getElementById("keyboard");

// Creating keyboard - from https://www.codingnepalweb.com/build-hangman-game-html-javascript/

// HÄR SAKNAS EN EVENT LISTENER!
for (let i = 97; i <= 122; i++) {
    var button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardAbc.appendChild(button);
}

// Randomise question
function randomQuestion() {
    let question = answersHint[Math.floor(Math.random() * answersHint.length)];
    let currentAnswer = answersHint[0];
    let currentHint = answersHint[1];
}

// Answers and hints
let answersHint = [
    {
        answer: "super mario",
        hint: "A hero with a green brother"
    },
    {
        answer: "kid icarus"
        hint: "His mission is to save goddess Palutena"
    }
];