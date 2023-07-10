
const testWord = ["example", "hippopatamus", "georgia", "pomegrenate", "cathedral", "recursion"]

const hints = ["Hint: To show as a model or guide", "Hint: A large mamal", "Hint: Is a State and Country", "Hint: Type of fruit", "Hint: Place of worship", "Hint: A function that calls itself again and again"]



let game = {
    tries : 5,
    guess: "",
    answer: "",
    hint: ""
}

let answer = []

let outcome; 

let wordInput; 


const letterList = document.querySelector("#dashes");

const winner = document.getElementById("win");

const loser = document.getElementById("lose");

const letters = document.querySelector("#letterField");

const tryEl = document.getElementById("tries");



document.addEventListener("keydown",(event)=> {
    if (!game.answer.includes(event.key)) {
        game.tries = game.tries - 1;
    }
    tryEl.innerText = game.tries;
      if (game.tries === 0) {
        loser.innerHTML = "Game Over"
      } else {
        let answerArr = game.answer.split("")
          if (!answer.includes(event.key)) {
          answerArr.forEach((wordInput, index)=> {
            if (event.key === wordInput) {
               let letterDivs = document.getElementsByClassName("letter")
                  for(let i=0; i < answerArr.length; i++) {
                  if (answerArr[i] === wordInput) 
                  letterDivs[i].innerText = wordInput;
                  }
                  answer.push(wordInput)
                } 
            })
            if (JSON.stringify(answer.sort()) == JSON.stringify(answerArr.sort())) {
                winner.innerHTML = "YOU WIN";
            }
          }
       }
})

function startGame() {
    let randomIndex = Math.floor(Math.random() * testWord.length)
    game.answer = testWord[randomIndex]
    game.hint = hints[randomIndex]
    game.tries = 5;
    for(let i = 0; i < game.answer.length; i++) {
        let letterSpace = document.createElement("div");
        letterSpace.classList.add("letter");
        letterSpace.innerText = "_"
        letterList.appendChild(letterSpace)
    }
      let clue =  document.querySelector("#hints")
      clue.innerHTML = game.hint
}
startGame()

document.querySelector(".restart").addEventListener('click', function(){
    window.location.reload();
    return false;
});
