/*Variables*/
var wins = document.getElementById("numberOfWins");
var loss = document.getElementById("numberOfLosses");
var guesses = document.getElementById("numberOfguesses");
var lettersGuessed = "";
var guesses = 13;


/*Array of words*/	
var memeNames = ["blue", "red", "green", "purple", "grey", "white", "black", "orange"];

var randoms = memeNames[Math.floor(Math.random() * memeNames.length)];
/*Resets the game and keeps score*/
window.onload = function startUp () {
	var answerWord = randoms;
	var wins = 0;
	var loss = 0;
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
if (guesses > 0){
    document.getElementById("Letters-guessed").innerHTML = "Letters Guessed: " + (lettersGuessed = lettersGuessed + userGuess);
    guesses -= 1;
    };
    if (guesses === 0){
    	alert("You blew it man! You blew it!");
    }
    document.getElementById('numberOfGuesses').textContent = "Number of Guesses Left: " + guesses
	}; 