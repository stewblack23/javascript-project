var words = ['corvette','GTR','FocusRS', 'mazdaspeed,'];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
var guess = [];

//Getting elements to be called later
var submitLetter = document.getElementById("submit-button");
var inputField = document.getElementById("input-letter");

//Captureing Keypress in field
document.getElementById("submit-button").addEventListener("click", function(){
console.log("submit-button");
});



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
