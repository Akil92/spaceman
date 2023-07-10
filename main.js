
//-------constants--------
const testWord = ["example", "hippopatamus", "georgia", "pomegrenate", "cathedral", "recursion"]

const hints = ["Hint: To show as a model or guide", "Hint: A large mamal", "Hint: Is a State and Country", "Hint: Type of fruit", "Hint: Place of worship", "Hint: A function that calls itself again and again"]

//------app's state (variables)-----

let game = {
    tries : 5,
    guess: "",
    answer: "",
    hint: ""
}

let outcome; // Try again, You're correct, continue to next word, you lose, GAME OVER.

let wordInput; // Player's guess


//-----cached element references----

const letterList = document.querySelector("#dashes");

const winner = document.getElementById("win");

const loser = document.getElementById("lose");

const letters = document.querySelector("#letterField");

const tryEl = document.getElementById("tries");

let answer = []

// -------event listeners--------
document.addEventListener("keydown",(event)=> {
    if (!game.answer.includes(event.key)) {
        game.tries = game.tries - 1;
    }
    tryEl.innerText = game.tries;
    if (game.tries === 0) {
        loser.innerHTML = "Game Over"
        console.log("gameOver");
    } else {
    let answerArr = game.answer.split("")
    console.log(answerArr)
    if (!answer.includes(event.key)) {
        answerArr.forEach((wordInput, index)=> {
            if (event.key === wordInput) {
               let letterDivs = document.getElementsByClassName("letter")
               for(let i=0; i < answerArr.length; i++) {
                  if (answerArr[i] === wordInput) 
                  letterDivs[i].innerText = wordInput;
                }
                 console.log(wordInput,"Correct")
             
                  answer.push(wordInput)
            } 
          })
    }
    console.log(answer.sort())
    console.log(answerArr.sort())
     if (JSON.stringify(answer.sort()) == JSON.stringify(answerArr.sort())
     ){
        winner.innerHTML = "YOU WIN";
        console.log("You Win")
     }

   console.log(event.key);
}
})

document.querySelector(".restart").addEventListener('click', function(){
    window.location.reload();
    return false;
  });

// ----------functions----------
function startGame() {
    let randomIndex = Math.floor(Math.random() * testWord.length)
    game.answer = testWord[randomIndex]
    game.hint = hints[randomIndex]
    game.tries = 5;
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



