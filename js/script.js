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

function creator(num) {
    // Create number boxes
    for (let x = 0; x < num; x++) {
        // Creating element on the page
        let element = document.createElement("input");
        // Set element properties ---> type = number
        element.setAttribute("type", "number");
        element.max = 9;
        element.min = 0;
        element.size = 1;
        element.style.width = "50px";
        element.classList.add("number");
        element.correct = Math.floor(Math.random() * 10);
        element.value = 0;
        // With this command ---> it goes forward in order by pressing the tab button
        element.order = x;
        // Placing an element as a subset of another element
        gameArea.appendChild(element);
    }

}