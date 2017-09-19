var wins = 0;
var loss = 0;
var numberOfGuesses = 8;
var guessedLetters= "";
var currentWord = "";
var blankWord = [];
var userGuessArray = [];


var colorsArray = ["Blue", "Red", "Green", "Purple", "Grey", "White", "Black", "Orange"];

/*random color picked from colorsArray*/
var randomColors= colorsArray[Math.floor(Math.random()*colorsArray.length)];

/*changes the colorsArray to lower case*/
var pickedColor = randomColors.toLowerCase();

/*Test to get random color from colorsArray*/
console.log(pickedColor);

/*Turn pickedColor into blanked letters*/
function blanksWords() {
	for (var i = 0; i < pickedColor.length; i++) {
		userGuessArray.push("_");
	};
	console.log(userGuessArray);
	/*Update current word*/
	document.getElementById("theWord").innerHTML = "Current Word: " + userGuessArray.join(" ");
	return currentWord;
};


/*Checks in user guess is in pickedcolor*/
document.onkeyup = function(event) {
	var userGuess = event.key;
	if (pickedColor.indexOf(userGuess) === -1){
        document.getElementById("Letters-guessed").innerHTML = "Letters Guessed: " + (guessedLetters = guessedLetters + userGuess);
        numberOfGuesses -= 1;

	};
	if (pickedColor.indexOf(userGuess) !== -1) {
		var index = pickedColor.indexOf(userGuess)
		console.log(index);
		userGuessArray[index] = userGuess;	
    };
    console.log(userGuessArray);
    document.getElementById("theWord").innerHTML = "Current Word: " + userGuessArray.join(" ");
};
/*	document.getElementById("theWord").innerHTML = "Current Word: " + blanksWords(pickedColor);*/



/*Reset of the game onload*/
window.onload = function startUp () {
	 numberOfGuesses = 8;
	 guessedLetters= "";
	 blanksWords();
	
};