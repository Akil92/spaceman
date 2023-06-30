console.log("JS works")

const testWord = "example"

console.log(testWord.length);

const letterList = document.querySelector("section")

for(let i = 0; i < testWord.length; i++) {
 let letterSpace = document.createElement("div");
 letterSpace.innerText = "_"
 console.log(letterSpace)
 letterList.appendChild(letterSpace)
}