//Array for words in game.
var words = ['corvette','GTR','FocusRS', 'mazdaspeed', 'Accord'];
//Array will hold the amount of guess in the game.
var guess = [];

//create variable for how many guesses the user receives
var guessLives = 5;

//Used to display word on screen
var displayWord = "";

// function looks into words array and creates a random selection within the array
var findRandom = Math.floor(Math.random() * words.length);
var pickWord =  words[findRandom];

//function loops through variable pickword and displays letters as underscore.
function underlined() {
  for (i = 0; i < pickWord.length; i++) {
    //Getting the first charater in words array and comparing it to empty guess array
    guess[i] = pickWord.charAt(i);
    console.log(pickWord);
    guess[i] = "_";
  }
  displayWord = guess.join("");
  //Output function to the DOM
  document.getElementById("letters").innerHTML = displayWord;
  document.getElementById("word-guess").innerHTML = pickWord.length;
  console.log(pickWord.length);
}

//function that will allow us to
function chooseLetter(letter) {
  var changes = 0;
  for (i = 0; i < pickWord.length; i++) {
    guess[i] = pickWord.charAt(i);
    if(pickWord.charAt(i) == letter) {
      guess[i] == letter;
      changes += 1;
      console.log(changes);
    }
  }
  if(changes < 1) {
    guessLives -= 1;
    document.getElementById("lives-amount").innerHTML = guessLives;
  }
  displayWord = pickWord.join("");
  document.getElementById("letters").innerHTML = guessLives;
}
