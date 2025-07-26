const gameNumberElement = document.querySelector(".game-number");
const gameFeedbackElement = document.querySelector(".game-feedback");
const gameGuessElement = document.querySelector(".game-guess");
const gameHealthNumberElement = document.querySelector(".game-health-number");
const gameHealthElement = document.querySelector(".game-health-bar");
const gamePlayBtn = document.querySelector(".game-button-play");
const gameResetBtn = document.querySelector(".game-button-reset");
const gameGifContainer = document.querySelector(".game-gif");
const gifImage = document.querySelector(".gif-img");


let gameHealth;
let gameOver;
let randomGuessNumber;

const updateData = (element, message) => {
    element.textContent = message;
};

const init = () => {
    gameHealth = 100;
    gameOver = false;
    randomGuessNumber = Math.floor(Math.random() * 10) + 1;
    updateData(gameHealthNumberElement, "100%");
    updateData(gameFeedbackElement, "What is your guess?");
    updateData(gameNumberElement, "?");
    gameGuessElement.value = "";
  gameHealthElement.style.backgroundColor = "#ff81c1"; 

    gameHealthElement.style.width = `${gameHealth}%`;
    

    gameNumberElement.style.backgroundColor = "transparent";
    gameGifContainer.style.display = "none";
gifImage.src = "";
gameNumberElement.style.backgroundImage = "url('donut.png')";
// gameNumberElement.style.background = "none";

};

init();

const playGame = () => {
    const guess = Number(gameGuessElement.value);
    if (gameOver) {
        updateData(gameFeedbackElement, "Reset to play again!");
        return;
    }

    if (!guess || guess < 1 || guess > 10) {
        updateData(gameFeedbackElement, "Enter a number between 1 and 10!");
        return;
    }

    if (guess === randomGuessNumber) {
       updateData(gameFeedbackElement, "🎉 You win!");
updateData(gameNumberElement, randomGuessNumber);



// Show Homer celebration GIF
gifImage.src = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNW44YjEyMHdkY3Uyand5ZGg3N2diMmhqdGZ5MHd5M3VoNmJ2eG54ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nKG86WRlokFfW/giphy.gif"; // Homer dancing
gameGifContainer.style.display = "block";

gameOver = true;

    } else {
        gameHealth -= 20;
        gameHealthElement.style.width = `${gameHealth}%`;
        updateData(gameHealthNumberElement, `${gameHealth}%`);

        if (gameHealth <= 0) {
           updateData(gameFeedbackElement, `Game Over! The number was ${randomGuessNumber}`);
updateData(gameNumberElement, randomGuessNumber);

// Show Bart disappointed GIF
gifImage.src = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3VtMDlkYmo3bzZjdXpjYWg2ZzZ5YTVxdDRmcGt2NGh5ejl1cHV4YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2JdTxHEW3lVr4EtG/giphy.gif";
gameGifContainer.style.display = "block";

gameOver = true;

        } else {
            updateData(gameFeedbackElement, guess > randomGuessNumber ? " Try lower!" : "Try higher!");
          if (gameHealth > 80) {
    gameHealthElement.style.backgroundColor = "#ff81c1"; 
} else if (gameHealth > 40) {
    gameHealthElement.style.backgroundColor = "#FED90F"; 
} else {
    gameHealthElement.style.backgroundColor = "#ff6f6f"; 
}
        }
    }
};

gamePlayBtn.addEventListener("click", playGame);
gameResetBtn.addEventListener("click", init);
