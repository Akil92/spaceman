console.log("JS works")
//-------constants--------
const testWord = ["example", "hippopatamus", "georgia", "pomegrenate", "cathedral", "recursion"]

const hints = ["To show as a model or guide", "A large mamal", "Is a State and Country", "Type of fruit", "Place of worship", "A function that calls itself again and again"]

//------app's state (variables)-----

let outcome; // Try again, You're correct, continue to next word, you lose, GAME OVER.

let wordInput; // Player's guess


//-----cached element references----

const letterList = document.querySelector("#dashes")



const letters = document.querySelector("#letterField")
let game = {
    tries : 4,
    guess: "",
    answer: "",
    hint: ""
}


const lettersUsedEl = document.getElementById("lettersUsed");

// -------event listeners--------
document.addEventListener("keydown",(event)=> {
    game.tries = game.tries - 1;
    let answerArr = game.answer.split("")
    console.log(answerArr)
    answerArr.forEach((wordInput, index)=> {
    if (event.key === wordInput) {
        let letterDivs = document.getElementsByClassName("letter")
        for(let i=0; i < answerArr.length; i++) {
           if (answerArr[i] === wordInput) 
           letterDivs[i].innerText = wordInput;
            
        }

        console.log(wordInput,"Correct")
     }
    })
   console.log(event.key);
   })








//    document.querySelector("main").addEventListener("click", handleInput);

// dashes.addEventListener("keydown", (e)=> {
//     if(!e.repeat) {
//         logMessage(`key "${e.key}" pressed [event: keydown]`);
//     } else {
//         logMessage(`key "${e.key}" repeating [event: keydown]`);
//     }
// });

// ----------functions-----------
function init() {

}

init()


function startGame() {
    let randomIndex = Math.floor(Math.random() * testWord.length)
    game.answer = testWord[randomIndex]
    game.hint = hints[randomIndex]
    for(let i = 0; i < game.answer.length; i++) {
        let letterSpace = document.createElement("div");
        letterSpace.classList.add("letter");
        letterSpace.innerText = "_"
        console.log(letterSpace)
        letterList.appendChild(letterSpace)

    }
      console.log(testWord[randomIndex].length)
      let clue =  document.querySelector("#hints")
      clue.innerHTML = game.hint


       
}
startGame()

// function minusTries() {
//     tries = tries - 1;
//     if (tries === 0) {
//         return "YOU LOSE!"
//     }
//}



function wrongLetters() {
    if (incorrectLetters.length === tries){
         return "Sorry, you lose. Please try again.";
         console.log(wrongLetters())

    }
};

// //In response to user clicking the spot to input a letter
// function handleInput(evt) {
// //    if () return;
// console.log(evt.target.tagName)
// }

// function render() {

// }

//------check if user input is correct
// let winner = checkWordInputForWinner();
// if(winner) return "YOU WIN! Continue to next word"
// // User input not correct
// return letterSpace


