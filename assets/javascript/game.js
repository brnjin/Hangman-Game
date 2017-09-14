/*Variables*/
var wins = document.getElementById("numberOfWins");
var loss = document.getElementById("numberOfLosses");
var guesses = document.getElementById("numberOfguesses");
var lettersGuessed = "";



/*Array of words*/	
var memeNames = ["pepe", "coldsteel", "doge", "grumpy cat", "success kid", "peanut butter kid"];

var randoms = memeNames[Math.floor(Math.random() * memeNames.length)];
/*Resets the game and keeps score*/
window.onload = function startUp () {
	var answerWord = randoms;
	var wins = 0;
	var loss = 0;
	var guesses = 13;
/*Grabs random meme name*/
var giveMeWords = blankTranslator(randoms);


document.getElementById("theWord").innerHTML = "Current Word: " + giveMeWords;

};

/*Blanks out answer*/
function blankTranslator (randoms) {
	var change = "";
	for (var i = 0; i < randoms.length; i++) {
	 change +="_ ";
	}
	return change;
}



/*Key input from user-on going*/
document.onkeyup = function(event) {
	var userGuess = event.key;

	/*Remember what key is pressed*/
		if (userGuess !== lettersGuessed){
			document.getElementById("Letters-guessed").innerHTML = "Letters Guessed: " + (lettersGuessed = lettersGuessed + userGuess);
		};

	}; 	


// win counter
/*if (currentWord === "pepe") {
	wins = wins + 1
	document.write (wins)
else (guesses -> 0) {
};
if (currentWord === "coldsteel") {
	wins = win + 1
else (guesses -> 0) {
};
if (currentWord === "doge") {
	wins = win + 1
else (guesses -> 0) {
};
if (currentWord === "grumpy cat") {
	wins = win + 1
else (guesses -> 0) {
};
if (currentWord === "peanut butter kid") {
	wins = win + 1
else (guesses -> 0) {
};
if (currentWord === "success kid") {
	wins = win + 1
else (guesses -> 0) {
};*/
/*winCount = getElementById("numberOfWins")
*/

// Letters guessed 
// Current word 
// number of guesses remaining 


