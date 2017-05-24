var myword = ['corvette','GTR','FocusRS', 'mazdaspeed,'];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];

//I guess create a function that will hold the code. Function hangman will be the name.
function hangman(){
  var findRandom = Math.floor(Math.random() * myword.length);
  var pickWord =  myword[findRandom];
  console.log(pickWord);
  for (i = 0; i < pickWord.length; i++) {
    if (pickWord[i] == guess) {
      console.log(pickWord);
      console.log(guess);
      console.log("Great job! Please select again");
    }
    else {
        console.log("Please try your selection again");
    }
  }
}

// console.log(hangman());
//runs the function on the page
hangman();
