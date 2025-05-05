let input = document.getElementById("input");
let btn = document.getElementById("btn");
let wrong = document.querySelector(".wrong");
let guesses = document.getElementById("guesses");

let answer = Math.floor(Math.random() * 100) + 1; 
console.log(answer);

let numberOfGuesses = 0;

btn.addEventListener("click", () => {
    guessNumber();
});

function guessNumber() {
    const guess = Number(input.value); 

    if (guess < 1 || guess > 100 || isNaN(guess)) { 
        wrong.innerText = "Please enter a valid number between 1 and 100";
    } else {
        numberOfGuesses++;
        guesses.innerHTML = "Number of guesses: " + numberOfGuesses;

        if (guess > answer) {
            wrong.innerText = "Your guess is too high";
            input.value = "";
        } else if (guess < answer) {
            wrong.innerText = "Your guess is too low";
            input.value = "";
        } else {
            wrong.innerText = "Congratulations! You guessed the number in " + numberOfGuesses + " guesses!";
            btn.disabled = true;
            setTimeout(() => {
                resetGame();
            }, 5000);
        }
    }
}

function resetGame() {
    numberOfGuesses = 0;
    guesses.innerHTML = "Number of guesses: 0";
    answer = Math.floor(Math.random() * 100) + 1;
    input.value = "";
    btn.disabled = false;
    wrong.innerText = "";
    console.log("New answer:", answer);
}
