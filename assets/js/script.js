// General
let keyboardAbc = document.getElementById("keyboard");

// Creating keyboard - from https://www.codingnepalweb.com/build-hangman-game-html-javascript/

// HÄR SAKNAS EN EVENT LISTENER!
for (let i = 97; i <= 122; i++) {
    var button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardAbc.appendChild(button);
}