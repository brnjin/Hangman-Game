/*Variables*/
var wins = document.getElementById("numberOfWins");
var loss = document.getElementById("numberOfLosses");
var guesses = document.getElementById("numberOfguesses");
var lettersGuessed = [];
var guesses = 13;
var userGuess = "";


/*Array of words*/	
var colors = ["blue", "red", "green", "purple", "grey", "white", "black", "orange"];

var randoms = colors[Math.floor(Math.random() * colors.length)];

var change = "";
/*Blanks out answer*/
function blankTranslator (randoms) {
	
	for (var i = 0; i < randoms.length; i++) {
	 change +="_";
	}
	return change;
}

console.log(randoms);

/*Key input from user-on going*/
document.onkeyup = function(event) {
	var userGuess = event.key;
	console.log(userGuess);
	for (i = 0; i < randoms.length; i++) {
		console.log(randoms[i]);
		console.log(userGuess);
		if (randoms[i] === userGuess){
			console.log('here');
			console.log(change[i]);
			change = change.slice(0,change.indexOf(i))+userGuess+change.slice(change.indexOf(i)+1);
			change[i] = userGuess;
		}
	}
	console.log('change', change)
	document.getElementById('theWord').innerHTML = change;


	/*Remember what key is pressed*/
/*	if (splitWords == userGuess){
		

	}*/
	if (guesses > 0){
	    document.getElementById("Letters-guessed").innerHTML = "Letters Guessed: " + (lettersGuessed = lettersGuessed + userGuess);
	    guesses -= 1;
    }
	if (guesses === 0){
		alert("You blew it man! You blew it!");
}
		document.getElementById('numberOfGuesses').textContent = "Number of Guesses Left: " + guesses;
	}

	/*Resets the game and keeps score*/
window.onload = function startUp () {
	var answerWord = randoms;
	var wins = 0;
var loss = 0;
/*Grabs random meme name*/
var giveMeWords = blankTranslator(randoms);


document.getElementById("theWord").innerHTML = "Current Word: " + giveMeWords;

}