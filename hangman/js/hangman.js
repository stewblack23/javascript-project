//create array called words
var words = ['corvette','GTR','FocusRS', 'mazdaspeed,'];
//create array guess which is empty
var guess = [];

//create variable for how many guesses the user receives
var guessLives = 6;

//.indexOf type will return the index

//.split

// function looks into words array and creates a random selection within the array
function getWords() {
    var findRandom = Math.floor(Math.random() * words.length);
    var pickWord =  words[findRandom];
    console.log(pickWord);
}

function underlined() {
  getWords()
  for (i = 0; i < words.length; i++) {
    
  }
}


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
