
//Arrays and Variables

var chosenWord = "";
var spellingList = ["afternoon", "again", "country", "cousin", "home", "hope", "horse", "school", "second", "see", "seen", "sent", "set", "she", "shoes", "should", "show", "sister", "six", "small", "snow", "so", "some", "something", "sometime", "soon", "spelling", "spring", "started", "stay", "stayed", "store", "story", "street", "summer", "Sunday", "supper", "sure", "table", "take", "teacher", "tall", "ten", "than", "thank", "that", "the", "their", "them", "there", "these", "they", "thing", "think", "third", "three", "through", "time", "table", "take", "teacher", "writing", "written"];
var spellingWord = "";
var letters = [];
var numberBlanks = 0;
var wrongLetters = 0;
var blanksAndSuccess = [];
var checkLetters = true;


//counters
var winCount = 0;
var lossCount = 0;
var guessLeft = 3;

//Functions

function StartHangman(){
chosenWord = spellingList[Math.floor(Math.random() * spellingList.length)];
letters = chosenWord.split("");
numberBlanks = letters.length;
//reset
guessLeft = 10;
wrongLetters = [];
blanksAndSuccess = [];
//Populate blanks and successes with the right number of blanks
for (var i = 0; i < numberBlanks; i++){
  blanksAndSuccess.push("__");
//document.getElementByid("wordtoGuess").innerHTML=blanksAndSuccess.join(" ");
}

function CheckLetters(letter){
  //check letters
  var letters = false;
  for (var i = 0; i<numberBlanks; i++){
    if (chosenWord [i]==letter){
       letters=true;
       alert("the letter is in the word")
    }
  }
 if(letters){
    for(var i = 0; i < numberBlanks; i++){
      if(chosenWord[i] == letter){
        blanksAndSuccess[i] = letter;
      }
    }

 }
//letter wasn't found
  else{
    wrongletters.push(letter)
    numGuess--;
  }
  }
}

//console.log(blanksAndSuccess);


function roundCompleted(){
console.log ("Win Count:" + winCount + "|lossCount:" + lossCount +"Guesses Left" + guessLeft);
}

//check if winner won
/*if (letters.to String()==blanksAndSuccess.to String()){
  winCount++
  alert("YOU WON!");
}
*/

//console.log for debugging
console.log(chosenWord);
console.log(letters);
console.log(numberBlanks);
//console.log(blanksAndSuccess)

//Main Process
StartHangman();



//keyclicks

/*document.onkeyup=function(event){
  var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase;
  console.log(letterGuessed);
}
*/


/*

window.onload = function () {


}

function pickWord(){
rand = Math.floor(Math.random()*spellingWord.length);
    spelligWord = spellingList[rand];
console.log(spellingWord);
}

alert("This is an alert box!");
console.log("this is set up correctly.")    



Show lives
   comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < geusses.length; i++) {
      if (counter + space === geusses.length) {
        showLives.innerHTML = "You Win!";
      }
    }

*/