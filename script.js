let gridSize = 16*16;
let div = "";
const body = document.querySelector("body");
const container = document.querySelector(".container");
let hoverCount = 0;

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
    if (!item.classList.contains("hovered")){
    item.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
    item.classList.add("hovered");
    item.style.opacity = 1;
  }
    else {
      item.style.opacity = Number(item.style.opacity) - 0.1; 
    }
//item.classList.add("targeted");
  }));
}

function removeGrid(){
  container.innerHTML = "";
}

const button = document.querySelector("button");
button.addEventListener("click",function(e){
  let gridNumber = window.prompt("How many");
  if (gridNumber < 101 || typeof gridNumber ==number){
    removeGrid();
    createGrid(gridNumber);
  }
  
  

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
