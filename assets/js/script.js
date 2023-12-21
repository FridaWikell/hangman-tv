// General
let keyboardAbc = document.getElementById("keyboard");
let answerDisplay = document.getElementById("correct-answer");
let mistakes = 0;
let usedLetters = [];
let maximumMistakes = 7;

maximumMistakes = document.getElementById("mistakes").innerHTML;


// Creating keyboard - from https://github.com/simonjsuh/Vanilla-Javascript-Hangman-Game/blob/master/js/hangman.js
function generateButtons() {
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
        `
      <button
        class="btn btn-lg btn-primary m-2"
        id='` + letter + `'
        onClick="compareAnswers('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

    document.getElementById("keyboard").innerHTML = buttonsHTML;
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
answerDisplay.innerHTML = randomQuestionAnswer.split("").map(() => `<li class = "abcde"></li>`).join("");
}

// Compare input and question
function compareAnswers(chosenLetter) {
    alreadyUsedLetters();
    disableLetter();
    
    if (randomQuestionAnswer.indexOf(chosenLetter) != 0) {
        isGameWon();
        hangmanWord();
   } else {
        hangmanImage();
        mistakes++
        newMistakes();
        isGameOver();
   }
}

// Chck if the game is won
//function isGameWon()

// Add the correct guess to the shown word
//function hangmanWord()

//Update Hangman Image when a incorrect answer is made
function hangmanImage() {
    document.getElementById("hangman").src = "assets/images/hangman" + mistakes + ".png";
}

// Add a new mistake
function newMistakes() {
    document.getElementById("mistakes-made").innerHTML = mistakes;
}

// Get a letter disabled
function disableLetter() {
    document.getElementById(chosenLetter).setAttribute("disabled");
}

// Add to already used letters after a guess
function alreadyUsedLetters() {
    usedLetters.push(chosenLetter);
}

// Check if the game is over
function isGameOver() {
    if (mistakes === maximumMistakes) {
        document.getElementById("keybord").innerHTML = "You lost!";
    }
}

selectAQuestion();
generateButtons();

