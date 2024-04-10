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

    // In case the game started
    if (!gamePlay) {
        gamePlay = true;
        // When we want to start, the desired part will be empty
        gameArea.innerHTML = "";
        score = 0;
        creator(6);
        button.innerHTML = "Check Numbers";
        message.innerHTML = "Guess The Numbers"
        // In case the game is running
    } else {
        const numbers = document.querySelectorAll(".number");
        score++;
        message.innerHTML = "Guesses " + score;
        let winCondition = 0;
        // Extracting the correct answer
        for (let i = 0; i < numbers.length; i++) {

            // Comparing user input numbers with correct numbers
            if (numbers[i].value == numbers[i].correct) {
                numbers[i].style.backgroundColor = "green";
                numbers[i].style.color = "white";
                winCondition++;
            } else {
                // Using IF condition linearly
                let color = (numbers[i].value < numbers[i].correct) ? "red" : "yellow";
                numbers[i].style.backgroundColor = color;
                numbers[i].style.color = "black";
            }
            // If the number of correct guess columns is equal to the total number of columns in the game
            if (winCondition == numbers.length) {
                gameEnd();

            }

        }

    }
};

function gameEnd() {
    message.innerHTML = "Bravo!  You solved the guess game in " + score + " Guesses";
    gamePlay = false;
    button.innerHTML = "Restart Game";
}

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
        // Generate random integers between 0 and 9
        element.correct = Math.floor(Math.random() * 10);
        element.value = 0;
        // With this command ---> it goes forward in order by pressing the tab button
        element.order = x;
        // Placing an element as a subset of another element
        gameArea.appendChild(element);
    }

}