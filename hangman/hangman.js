var myword = ['corvette','GTR','FocusRS'];
var guess = "e";
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
