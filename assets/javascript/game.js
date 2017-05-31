//Arrays and Variables

var spellingList = ["afternoon", "again", "country", "cousin", "home", "hope", "horse", "school", "second", "see", "seen", "sent", "set", "she", "shoes", "should", "show", "sister", "six", "small", "snow", "so", "some", "something", "sometime", "soon", "spelling", "spring", "started", "stay", "stayed", "store", "story", "street", "summer", "Sunday", "supper", "sure", "table", "take", "teacher", "tall", "ten", "than", "thank", "that", "the", "their", "them", "there", "these", "they", "thing", "think", "third", "three", "through", "time", "table", "take", "teacher", "writing", "written"];
var chosenWord = "";
var lettersinWord = [];
var numberBlanks = 0;
var blanksAndHits = [];
var wrongLetters = [];

//counters
var winCount = 0;
var lossCount = 0;
var guessLeft = 9;

//============================================================================================
//Functions

function startHangman(){
chosenWord = spellingList[Math.floor(Math.random() * spellingList.length)];
console.log(chosenWord);

lettersinWord = chosenWord.split("");
numberBlanks = lettersinWord.length;

  for (var i = 0; i < numberBlanks; i++) {
    blanksAndHits.push("_");
  }
  
  console.log(blanksAndHits);

  document.getElementById("word").innerHTML = blanksAndHits.join("");
  document.getElementById("guess").innerHTML = guessLeft;
  document.getElementById("Wins").innterHTML = winCount;
  document.getElementById("losses").innerHTML = lossCount;

}

function checkLetters(letter){
  //check letters
  var isLetterInWord = false;
  for (var i = 0; i<numberBlanks; i++){
    if (chosenWord [i] == letter){
       isLetterInWord=true;
    }
  }
  console.log("the letter is in the word");

 if(isLetterInWord){
    for(var i = 0; i < numberBlanks; i++){
      if(chosenWord[i] == letter){
        blanksAndHits[i] = letter;
      }
    }
  }
 
//letter wasn't found
  else{
    wrongLetters.push(letter)
    guessLeft--;
  }
console.log(blanksAndHits);

}

function roundComplete(){
  console.log("Win Count: " + winCount + " | Loss Count: " + lossCount +  "| Guesses Left: " + guessLeft);

document.getElementById("guess").innerHTML = guessLeft;
document.getElementById("word").innerHTML = blanksAndHits.join(" ");
//document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" "); 
//check if won
  if (lettersinWord.toString() == blanksAndHits.toString()) {

  //dispay the win counter in the HTML
  document.getElementById("Wins").innerHTML = winCount;
  document.getElementById("word").innerHTML = chosenWord;
  
  alert("You Win!");
  startHangman();
}

else if (guessLeft == 0) {
  lossCount++;
  alert("You lost");

document.getElementById("losses")
  startHangman();
}

}


//================================================================

startHangman();

document.onkeyup = function(event){
  var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();
console.log(letterGuessed);
}

console.log(chosenWord);

/*var buttons=document.querySelectorAll(".btn");
console.log(buttons);
buttons.forEach(function(button){
  button.addEventListener("click",function(event){
    console.log(event.target.text);
    this.classList.push('disabled');
  })
})
*/