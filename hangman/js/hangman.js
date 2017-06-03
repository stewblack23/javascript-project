//create array called words
var words = ['corvette','GTR','FocusRS', 'mazdaspeed,'];
//create array guess which is empty
var guess = [];

//create variable for how many guesses the user receives
var guessLives = 6;

//Used to display word on screen
var testWord = "test";
var displayWord = "";

// function looks into words array and creates a random selection within the array
function getWords() {
    var findRandom = Math.floor(Math.random() * words.length);
    var pickWord =  words[findRandom];
}

//function calls getWords function and loops through guess array and compares it to words array
function underlined() {
  getWords()
  for (i = 0; i < words.length; i++) {
    //Getting the first charater in words array and comparing it to empty guess array
    guess[i] = words.charAt(i);
    console.log(guess);
    guess[i] = "_";
  }
  displayWord = guess.join("");
  console.log(guess);
  document.getElementById("letters").innerHTML = displayWord;
}

underlined()

// function hangman(){
//   var findRandom = Math.floor(Math.random() * myword.length);
//   var pickWord =  myword[findRandom];
//   console.log(pickWord);
//   for (i = 0; i < pickWord.length; i++) {
//     if (pickWord[i] == guess) {
//
//     }
//     else {
//
//     }
//   }
// }
// hangman();
