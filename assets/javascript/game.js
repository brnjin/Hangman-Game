/*Variables*/
var win = 0
var loss = 0
var numberOfGuessesLeft = 8
var lettersGuessed = ""


/*Array of words*/
var memeNames = ["pepe", "coldsteel", "doge", "grumpy cat", "success kid", "peanut butter kid"]
/*Key input from user-on going*/
document.onkeyup = function(event) {
	var userGuess = event.key;
	/*Remember what key is pressed*/

		document.getElementById("Letters-guessed").innerHTML = "Letters Guessed: " + (lettersGuessed = lettersGuessed + userGuess);

	/*Win or Loss count change*/
	/*Subtract from number of guesses*/
	/*Change the blank letter if needed*/
};


/*If else statements for each letters*/

/*If the numberOfGuessesLeft goes to 0 {
	reset numberOfGuessesLeft to 8
	clear lettersGuessed
	call new word */