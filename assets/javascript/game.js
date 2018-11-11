// create an oject guessGame{}.
var guessGame = {


 // create an array words[] inside of guessGame{} that has words saved as arrays of the letters.
  arrayFunctions : [
    "Array.from()", 
    "Array.isArray()",
    "Array.of()",
    "Array.concat()",
    "Array.copyWithin()",
    "Array.entries()",
    "Array.every()",
    "Array.fill()",
    "Array.filter()",
    "Array.find()",
    "Array.findIdex()",
    "Array.forEach()",
    "Array.includes()",
    "Array.indexOf()",
    "Aray.join()",
    "Array.lastIdexOf()",
    "Array.map()",
    "Array.pop()",
    "Array.push()"


  ],



  hints : [
    "creates new array from array like or iterable object",
    "checks if passed value is an array",
    "creates a new array with passed values",
    "merges multipile arrays",
    "copies to index arr1 from index arr2 until arr3",
    "Itterator returning index and value",
    "itterates through index checking if they pass the test passed in returns false if one doesn't pass.",
    "fills an array with arr1 from index arr2 until arr3",
    "returns a new array with all elements that pass the test that is passed in",
    "returns the first element that passes the test passed in",
    "returns the index of first element that satisfies the provided testing function returns -1 if none fit.",
    "executes a provided function once for every element in array.",
    "determines wether an array includes a certain element returns boolean values",
    "returns the first index of a given element -1 if not present in array.",
    "creates and returns a new string with all elements in the array divided with given arr or ',' if now arr given",
    "returns the last index at which a given element is at",
    "returns a new array with the results of calling a provided function on every element in the array.",
    "removes the last element of the array and returns it",
    "adds one or more elements to the end of an array."



  ],

 // create variables to track score, number of guesses left, word, and letters guessed
  score : 0,
  numGuesses : 6,
  word : "",
  lettersGuessed : [""],
  guess: "",
  letters: [],
  


 //make a function to pull a random word from the word array and set it to the variable word.
  beep: function() {
  var snd = new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");  
  snd.play();
},

  newWord: function(){
    this.guessGame = 6;
    this.lettersGuessed = [];
    this.letters =[];
    this.word = (this.arrayFunctions[Math.floor(Math.random() * this.arrayFunctions.length)]);
    
    var i = this.word.length;
    
    // console.log(this.word);
    //make a while loop for the word picked that propagates underscores for each letter.
    while (i > 0){
      this.letters.push("_");
      i--;
    }
    // writes to document.
    document.getElementById("hint").style.display = "none";
    document.getElementById("guessed").textContent = this.lettersGuessed;
    document.getElementById("word").textContent = this.letters.join(" ");
    document.getElementById("guesses_left").textContent = this.numGuesses;
    document.getElementById("hint").textContent = "Hint: " + this.hints[this.arrayFunctions.indexOf(this.word)]

    console.log(this.letters);
    

  },


 
}

document.getElementById("hint_btn").onclick = function(event){
  document.getElementById("hint").style.display = "inline";
}

 //make on.keyup to catch key presses
document.onkeyup = function(event) {
  // make 
  guessGame.guess = event.key;
  j = 0;

  if(guessGame.guess ==="Shift"){

  }
  else{



  if(guessGame.lettersGuessed.indexOf(guessGame.guess)>= 0){
    alert ("You already guessed that");
  }

  else{

    if(guessGame.word.indexOf(guessGame.guess) === -1){
      guessGame.lettersGuessed += guessGame.guess;
      document.getElementById("guessed").textContent += guessGame.guess;
      guessGame.numGuesses--;
      document.getElementById("guesses_left").textContent = guessGame.numGuesses;
      guessGame.beep();

      if(guessGame.numGuesses === 0){
        alert("you lost!");
        alert("the function was " + guessGame.word);
        guessGame.newWord();
      }
    }

    else{

      while(guessGame.word.indexOf(guessGame.guess, j) >= 0){
        guessGame.letters[guessGame.word.indexOf(guessGame.guess, j)] = guessGame.guess;
        j = guessGame.word.indexOf(guessGame.guess, j) + 1;
        guessGame.lettersGuessed += guessGame.guess;
        document.getElementById("word").textContent = guessGame.letters.join(" ");
        var audio = new Audio("");
        audio.play();

        if(guessGame.letters.join("") === guessGame.word){
          guessGame.score ++;
          document.getElementById("wins").textContent = "Wins: " + guessGame.score;
          document.getElementById("win_audio").play();


        }


      }





    }

  }
}


}

document.getElementById("start").onclick = function(event){
  guessGame.newWord();
}



 //if not adds it to guessed letter checks if letter is in word, if so it switchs letter with the appropriate underscores, if it finishes the word add one to the wins. 

 //  otherwise lowers guesses left,

 guessGame.newWord();