//create array called words
var words = ['corvette','GTR','FocusRS', 'mazdaspeed,'];
//create array guess which is empty
var guess = [];

//create variable for how many guesses the user receives
var guessLives = 6;

//Used to display word on screen
var displayWord = "";

// function looks into words array and creates a random selection within the array
var findRandom = Math.floor(Math.random() * words.length);

//randomizes words array and puts it into a function.
var pickWord =  words[findRandom];

//function calls getWords function and loops through guess array and compares it to words array
function underlined() {
  for (i = 0; i < pickWord.length; i++) {
    //Getting the first charater in words array and comparing it to empty guess array
    guess[i] = pickWord.charAt(i);
    console.log(pickWord);
    guess[i] = "_";
  }
  displayWord = guess.join("");
  document.getElementById("letters").innerHTML = displayWord;
}

underlined();
