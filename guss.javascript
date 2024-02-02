let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);

function checkGuess() {
    let gussedNumber = parseInt(userInput.value);
    if (gussedNumber > randomNumber) {
        gameResult.textContent = "too High,Try Again!"
        gameResult.style.backgroundColor = "#1e217c"
    } else if (gussedNumber < randomNumber) {
        gameResult.textContent = "too Low,Try Again!"
        gameResult.style.backgroundColor = "#1e217c"
    } else if (gussedNumber === randomNumber) {
        gameResult.textContent = "Congratulations! you got it right"
        gameResult.style.backgroundColor = "green"
    } else {
        gameResult.textContent = "please provide valid input"
        gameResult.style.backgroundColor = "red"
    }
}
