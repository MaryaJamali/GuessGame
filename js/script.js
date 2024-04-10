// Find page elements
const gameArea = document.querySelector(".game");
const button = document.querySelector(".btn");
const message = document.querySelector(".message");
// Game start mode
let gamePlay = false;
let score = 0;
// Add event to button
button.addEventListener("click", gameStart);
function gameStart() {
    // If the game was running
    if (!gamePlay) {
        gamePlay = true;
        gameArea.innerHTML = "";
        score = 0;
        creator(6);
        button.innerHTML = "Check Numbers";
        message.innerHTML = "Guess The Numbers"
    } else {
        
    }
};