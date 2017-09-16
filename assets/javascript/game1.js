class Game {
  constructor(){
    //Set instance variables here for new game
    this.wordBank = [
      "red",
      "blue",
      "green",
      "purple",
      "orange",
      "yellow",
      "violet",
      "grey",
      "white"];
    this.wins = 0;
    this.loss = 0;
    this.guesses = 8;
    this.answerWord = this.pickNewWord();
    this.lettersGuessed = "";
    this.displayedWord = [];

    //Start manipulating html
    this.insertBlankedWord();
    document.onkeyup = this.handleKeyInput.bind(this);

    //TEST ONLY DELETE WHEN DONE
    console.log(this.answerWord);
    //TEST ONLY DELETE WHEN DONE
  }

  //Sets a random word from the wordBank as the new word
  pickNewWord(){
    const wordBank = this.wordBank;
    return wordBank[Math.floor(Math.random() * wordBank.length)];
  }

  //Insert blanked out word for initial setup
  insertBlankedWord(){
    //Add _ for each letter in the answerWord
    for (let i = 0; i < this.answerWord.length; i++){
      this.displayedWord.push("_");
    }

    //Update the displayed word
    this.updateDisplayedWord();
  }

  //Grabs and updates the displayed word in the document
  updateDisplayedWord(){
    document.getElementById("theWord").innerHTML =
      `Current Words: ${this.displayedWord.join(" ")}`;
  }

  //Handler function for user key inputs
  handleKeyInput(event){
    let userGuess = event.key;
    const validKeys = "abcdefghijklmnopqrstuvwxyz";

    //If the user does not guess a letter
    if (!validKeys.includes(userGuess)){
      alert("That key is not valid.");
    }
    //Else if the answerWord includes the User's guess
    else if (this.answerWord.includes(userGuess)){
      // TODO: Need to refactor this block into a correct guess handler function
      this.displayedWord = this.displayedWord.map((letter, idx) => {
        if (letter === "_" && this.answerWord[idx] === userGuess){
          return userGuess;
        }
        else {
          return letter;
        }
      });

      this.updateDisplayedWord();
    }
    //Else if the user guesses a letter that has already been guessed
    else if (this.lettersGuessed.includes(userGuess)){
      alert("That letter has been guessed");
    }
    //Else if the user picks a new wrong letter
    else if (!this.lettersGuessed.includes(userGuess)){
      //Update the letters guessed
      this.lettersGuessed += userGuess;
      //Reduce the number of guesses remaining
      this.guesses -= 1;

      //Update letters guessed in the document
      document.getElementById("Letters-guessed").innerHTML =
      `Letters Guessed: ${this.lettersGuessed}`;

      //Update guesses remaining in the document
      document.getElementById("numberOfGuesses").innerHTML =
        `Number of Guesses Left: ${this.guesses}`;

      //If user is out of guesses
      if (this.guesses === 0){
        alert("Sorry you are out of guesses. You lose");
        //Update number of losses
        this.loss -= 1;

        //Update loss in document
        document.getElementById("numberOfLosses").innerHTML = 'Loss:' + this.loss;

        //Clear keyup event so that user can't interact with page after losing
        document.onkeyup = null;
      }
      //If user guesses the word correctly
      if (this.answerWord === this.displayedword){
      	alert("Congrats! You Won!");

      	//Update number of wins
      	
      	this.win += 1;
      	//Update win in document
      	document.getElementById("numberOfWins").innerHTML = 'Wins: '+ this.win;
      }
    }
  }
}


//Add event listener when the page load. Start a new game.
document.addEventListener('DOMContentLoaded', () => {
  new Game();
});