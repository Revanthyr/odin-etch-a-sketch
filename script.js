let gridSize = 16*16;
let div = "";
const body = document.querySelector("body");
const container = document.querySelector(".container");

function createGrid(gridNumber){
for (let i = gridNumber**2;i>0;--i){
     div = document.createElement("div");
    div.classList.add("square");
    div.style.height = `${960/(gridNumber)}px`;
    div.style.flexBasis = `${960/(gridNumber)}px`;
    container.appendChild(div);
}
let allDivs = document.querySelectorAll(".square");
  allDivs.forEach(item => item.addEventListener("mouseover",function(e){
    item.classList.add("targeted");

  }));
}
function removeGrid(){
  container.innerHTML = "";
}

const button = document.querySelector("button");
button.addEventListener("click",function(e){
  let gridNumber = window.prompt("How many");
  removeGrid();
  createGrid(gridNumber);
  
console.log(allDivs);
}) 


  
   




/*
ajoutert un bouttton
evenlistener (onclick)
popup 
 - valeur max = 100 stocker la valeur du popup dans une variable
remove child all divs
executer fonction creatrice de grid 
avec pour argument la valeur entrée
changer la dimension des carrés selon la valeur


*/
