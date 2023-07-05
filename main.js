console.log("JS works")
//-------constants--------
const testWord = ["Example", "Hippopatamus", "Georgia", "Pomegrenate", "Cathedral", "Recursion"]

const hints = ["To show as a model or guide", "A large mamal", "Is a State and Country", "Type of fruit", "Place of worship", "A function that calls itself again and again"]

//------app's state (variables)-----

let outcome; // Try again, You're correct, continue to next word, you lose, GAME OVER.

let wordInput; // Player's guess


//-----cached element references----

const letterList = document.querySelector("#dashes")
let game = {
    tries : 4,
    guess: "",
    answer: ""
}

const letterFieldEl = document.getElementById("letterField");

const guessedLettersEl = document.getElementById("guessedLetters");

const lettersUsedEl = document.getElementById("lettersUsed");

// -------event listeners--------
document.addEventListener("keydown",(event)=> {
    game.tries = game.tries - 1;
    game.answer.split().forEach(wordInput, index => {
    if (event.key === wordInput) {
        // letterFieldEl.value += event.key;
        console.log(wordInput,"Correct")
     }
    })
   console.log(event.key);
   })

//    document.querySelector("main").addEventListener("click", handleInput);

dashes.addEventListener("keydown", (e)=> {
    if(!e.repeat) {
        logMessage(`key "${e.key}" pressed [event: keydown]`);
    } else {
        logMessage(`key "${e.key}" repeating [event: keydown]`);
    }
});

// ----------functions-----------
function init() {

}

init()

document.onkeydown = function (e) {
    console.log('key down');
    console.log(e);
  };

function startGame() {
    let randomIndex = Math.floor(Math.random() * testWord.length)
    game.answer = testWord[randomIndex]
    for(let i = 0; i < game.answer.length; i++) {
        let letterSpace = document.createElement("div");
        letterSpace.innerText = "_"
        console.log(letterSpace)
        letterList.appendChild(letterSpace)
       }
       console.log(testWord[randomIndex].length)
       
}
startGame()

function minusTries() {
    tries = tries - 1
}

// function wrongLetters() {
//     if (this.incorrectLetters.length === this.tries){
//         document.getElementById("youLose").innerText = "Sorry, you lose. Please try again.";

//     }
// };

//In response to user clicking the spot to input a letter
function handleInput(evt) {
//    if () return;
console.log(evt.target.tagName)
}

function render() {

}

//check if user input is correct
// let winner = checkWordInputForWinner();
// if(winner) return "YOU WIN! Continue to next word"
// // User input not correct
// return letterSpace


