console.log("Javascript and Node are working");

// GUESS THE NUMBER GAME
//Requirements
//These are the requirements that your project should fulfill:

// As a user, I want an introductory message that greets the user and asks for their name. "Welcome! What is your name?"

// As a user, I want to be able to enter my name and click enter.

// As a user, after the greeting with my name, I want to be asked for a new input with a digit. For example: "Enter a number between 0 and 25 to start guessing..."

// As a game developer, I want the user to have a realistic chance to win, therefore I take a random number between 0 and 25. Hint: use Math.random()

// As a user, I want to be able to enter and number and click enter.

// As a user, I want to receive a message when I guessed the wrong number, for example: "Unfortunately, that is not correct!". Afterward, I want to be asked to guess again.

// As a user, I want to receive a message when I guess the right number, for example: "Congratulations, you have won the game!". The game is now finished.

// As a user, I want to receive a message when the game is done, for example: "Bye [name], see you!"

let computerNumber = 0;

function askName() {
  let userName = prompt("Hello, what is your name?");
  let userNumber = prompt(
    "Hello " + userName + "! Guess an number between 0 and 25"
  );
  randomNumber();
  function randomNumber() {
    computerNumber = Math.floor(Math.random() * 25);
    if (userNumber == computerNumber) {
      prompt("Congratulations! my number was: " + computerNumber);
    } else {
      prompt("You lose, my number was: " + computerNumber);
      prompt("Bye bye " + userName);
    }
  }
}
