// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

function getThemColors(e) { //e for event
  // select current color 
  const currentColor = document.querySelector("#current-color");
  // check which color was clicked at the bottom , get the value 
console.log(e.target.style.backgroundColor)
  // change background color of current-color to that value 
 currentColor.style.backgroundColor = e.target.style.backgroundColor;
  
}

const color = document.querySelectorAll(".color");

for(let c of color) {
  c.addEventListener("click", getThemColors);
}
function paintCell(e) { // e for event
  //currentColor must be defined in the codeblock 
  const currentColor = document.querySelector("#current-color");
e.target.style.backgroundColor = currentColor.style.backgroundColor
}
const cells = document.querySelectorAll(".cell");
for (let cell of cells) {
cell.addEventListener("click",paintCell)
}