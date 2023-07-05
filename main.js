console.log("JS works")

const testWord = ["Example", "Hippopatamus", "Georgia", "Pomegrenate", "Cathedral", "Recursion"]



let tries = 3

function minusTries() {
    tries = tries - 1
}

console.log(testWord.length);

const letterList = document.querySelector("#dashes")
let game = {
    tries : 3,
    guess: "",
    answer: ""
}

function startGame() {
    let randomIndex = Math.floor(Math.random() * testWord.length)
    game.answer = testWord[randomIndex]
    for(let i = 0; i < game.answer.length; i++) {
        let letterSpace = document.createElement("div");
        letterSpace.innerText = "_"
        console.log(letterSpace)
        letterList.appendChild(letterSpace)
       }
       
}
startGame()

document.addEventListener("keydown",(event)=> {
 game.tries = game.tries - 1;
 game.answer.split().forEach(attempt, index => {
 if (event.key === attempt) {
    
 console.log(attempt,"Correct")
  }
 })
console.log(event.key);
})

